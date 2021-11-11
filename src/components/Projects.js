import React from "react";

import PasswordGenerator from "../img/Passwoed-Generator.png";
import CodeQuiz from "../img/Code-Quiz2.png";
import ReadMeGenerator from "../img/code-icon.png"
import WorkDaySchedule from "../img/Work-Day-Scheduler.png"
import SignAndEvents from "../img/Sign-Events3.png"
import WeightTracker from "../img/Weight-Tracker1.png"
const projects = () => {
    return (
        <div id="projects" className="projects">
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        {/* <div class="container"> */}
                        <div class="section-header">
                            <h3 className="title" data-title="What I Do">Projects</h3>
                            <p className="text text-Project">
                                These projects develop an end-to-end application independently by handling all the work of coding, databases, servers and platforms.
                                The technologies I used in my projects are HTML, JavaScript , CSS, MYSQL, Node.js (Express.js, Inquirer.js, File System, Sequelize, MVC).
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={PasswordGenerator} alt="" className="icon" />

                                <h3 className="title-sm">Password Genertor</h3>
                                <p className="text">
                                    This code enables employees to generate random passwords based on criteria that they’ve selected.
                                    This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that I write.
                                </p>
                                <a href="https://ebazazzadeh.github.io/passwordGenerator/" class="btn small" target="_blank">Read more</a>

                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={CodeQuiz} className="icon" alt="" />
                                <h3 className="title-sm">Code-Quiz</h3>
                                <p className="text">
                                    This app is built a timed coding quiz with multiple-choice questions.
                                    This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I wrote.
                                </p>
                                <a href="https://ebazazzadeh.github.io/Code-Quiz/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={ReadMeGenerator} className="icon" alt="" />
                                <h3 className="title-sm">README_GENERATOR</h3>
                                <p className="text">
                                    This is a readme generator using command prompts from node.js to create a file and write to all the parts.
                                </p>
                                <a href="https://ebazazzadeh.github.io/README_GENERATOR/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={WorkDaySchedule} className="icon" alt="" />
                                <h3 className="title-sm">Work-Day-Scheduler</h3>
                                <p className="text">
                                    A simple calendar application that allows a user to save events for each hour of the day.
                                    It runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                                </p>
                                <a href="https://ebazazzadeh.github.io/Work-Day-Scheduler/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={SignAndEvents} class="icon" alt="" />
                                <h3 className="title-sm">Signs-and-Events (Team work)</h3>
                                <p className="text">
                                    In this app we are taking the users DOB and putting it into two separate APIs to show the users
                                    astrological information and important events on that day in history.
                                </p>
                                <a href="https://jheckel-dev.github.io/signs-and-events/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={WeightTracker} class="icon" alt="" />
                                <h3 className="title-sm">WeightTracker (Team work)</h3>
                                <p className="text">
                                    A simple calendar application that allows a user to save events for each hour of the day.
                                    It runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                                </p>
                                <a href="https://my-tracker35.herokuapp.com/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;