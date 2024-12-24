import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: "album",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (results, error, album) => {
                    return [{ type: "Album", id: album.id }];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: "DELETE",
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (results, error, user) => {
                    return [{ type: "UserAlbums", id: user.id }];
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        },
                        method: "POST",
                    }
                }
            }),

            fetchAlbums: builder.query({
                providesTags: (results, error, user) => {
                    const tags = results.map(album =>{
                        return {type: "Album", id: album.id};
                    });
                    tags.push({type: "UserAlbums", id: user.id});
                    return tags;
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id,
                        },
                        method: "GET",
                    }
                }
            }),
        }
    }
});


export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation } = albumsApi;
export { albumsApi };