// Directions for this project
// Added Bulma css using: npm i bulma
// Added the import statement for bulma

import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
    return (
        <div>

            <section className="hero is-primary ">
                <div className="hero-body">
                    <p className="title has-text-white">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage} 
                            description= "Alexa was create by Amazon and helps you buy things."
                            />
                            
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage} 
                            description= "Cortana was create by Microsoft and who knows what it does."
                            />

                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage} 
                            description= "Siri was create by Apple and is being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
};

export default App;