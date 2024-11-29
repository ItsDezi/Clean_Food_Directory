/* eslint-disable react/react-in-jsx-scope */
import { APP_TITLE } from "../Assets/constants";
function About() {
return(
    <>
    <div className="about-container-container">
        <div className="left-about-banner"></div>
        <div className="about-container">
            <h1 style={{padding:"0px 0px 40px 0px"}}>Here's a little about us...</h1>
            <h5>Welcome to {APP_TITLE}, your go-to platform for discovering and sharing hidden gems in the world of clean, locally sourced, and organic foods. Our mission is to connect people with sustainable food options that prioritize health, community, and sustainability.

We believe that good food should be accessible to everyone, and some of the best options aren’t always easy to find through traditional means. That’s where we come in. Whether you’re looking for a small organic farm stand, a family-run bakery using locally sourced ingredients, or a hidden café championing sustainable practices, we’re here to make the search simple and rewarding.

Our directory is powered by a passionate community of food lovers who contribute reviews, recommendations, and new listings, ensuring that no clean food spot goes unnoticed. Together, we’re building a trusted resource for anyone who values fresh, ethical, and local eating.

Join us in reshaping the way we find and enjoy food—one local bite at a time.</h5>

<h1 style={{padding:"0px 0px 40px 0px"}}>Founders</h1>
        </div>
        <div className="right-about-banner"></div>
    </div>
    
    </>
)
}
export default About;