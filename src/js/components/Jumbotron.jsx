import React from "react";

const Jumbotron = () => {
    return (
        <div className="card-body bg-light p-5">
            <h1 className="card-title mb-2">Here's some cool indies you might like</h1>
            <p className="card-text">
                Indie games are video games created by individuals or small, 
                independent teams 🛠️ without the financial and creative control 
                of a major publisher. This independence allows developers immense 
                artistic freedom, often resulting in titles known for their innovation ✨, 
                unique art styles, and experimental gameplay that major studios 
                are often hesitant to risk. 👾 While they typically have smaller budgets
                than "AAA" titles, indie games 🚀 are a central hub for creative
                risk-taking.
            </p>
            <a target="_blank" href="https://store.steampowered.com/curator/12074432-The-Absolute-Best-Indie-Games/?l=english" 
            className="btn btn-success">Buy one!</a>
        </div>

    );
};

export default Jumbotron;