import React, { useState } from "react";
//import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    // creating  the hook for the message
    const [successMessage, setSuccessMessage] = useState("");
    //creating  couple component from useForm,  definr the useform
    const { register, handleSubmit, formState: { errors } } = useForm();

    // define the serviceID, I created on EmailJS-com
    const serviceID = "service_ID";
    // define templateID that I created in template of emailjs
    const templateID = "template_ID";
    //   for userID, go to integration in emailjs and copy the userID from API MediaKeySession.
    const userID = "user_bJYh43uiM2rvcRHE3m0sb";

    // NOw we can create method onSubmit
    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            //add the object to get the information deom form
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            userID
        );
        // to resewt the form
        r.target.reset();
    };

    // add Emailjs for getting an email from requester
    const sendEmail = (serviceID, templateID, variables, userID) => {
        // variables comes from the object that define upper
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Successfuly Sent! I'll contact you as soon as possible");
                //console.log("pass");
            })
            .catch(err => console.error(`something went wrong ${err}`));
    };

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>
                    Please fill the form and explain what kind of project you need, I will
                    contact you as soon as possibles
                </p>
                <span className="success-message">{successMessage}</span>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <form onSubmit={sendEmail}> */}
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* adding bootstrap text-center */}
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    // {...register("test", { required: "Please enter your name" })}
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Please enter a name with fewer than 20 characters",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    id="phone"
                                    {...register("phone", {
                                        required: "Please add your phone number",
                                    })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.phone && errors.phone.message}
                                </span>
                            </div>
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Please provide your email address",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Email"
                                        }
                                    })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.email && errors.email.message}
                                </span>
                            </div>
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    id="subject"
                                    {...register("subject", {
                                        required: "OPPS, you forget to add the subject",
                                    })
                                    }
                                />
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.subject && errors.subject.message}
                                </span>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                    className="form-control"
                                    type="text"
                                    id="description"
                                    placeholder="Please briefly explain your request"
                                    name="description"
                                    {...register("description", {
                                        required: "Please describe shortly your project needs ... ",
                                    })
                                    }
                                ></textarea>
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.description && errors.description.message}
                                </span>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
