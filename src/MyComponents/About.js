import React from 'react'

export const About = () => {
    return (
        <div className="container">
            <h3>Brief Overview</h3>
            <p>A user can perform the following tasks:-</p>
            <ul>
                <li>Add any task with a description to the Todos list.</li>
                <li>Delete task item once it is done or not required anymore.</li>
            </ul>
            <p>Note that: All the tasks data is being stored in the local storage which the application will automatically retrieve once the user revisits or refreshes the webpage.</p>
        </div>
    )
}
