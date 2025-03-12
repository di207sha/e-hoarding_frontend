// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import  "../assets/css/registration.css";

export const Registration = () => {

    const statesOfIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitHandler = (data) => {
        console.log("Form Data Submitted:", data);
        alert("Form submitted successfully!");
    };
    return (
        <div style={{backgroundColor:"black",width:"125%"}}>
            <div className="main-body">
                <div className="body" style={{margin:'0 300px' , width:'50%'}}>
                    <div className="form-container mx-auto">
                        <h2 className="form-heading">Register Yourself!</h2>
                        <form onSubmit={handleSubmit(submitHandler)} className="form ">

                            {/* Advertisement Details */}
                            <div className="form-group">
                                <input
                                    {...register("adTitle", { required: "Ad Title is required*" })}
                                    className="form-input"
                                    placeholder="Enter Ad title"
                                />
                                {errors.adTitle && (
                                    <p className="error-text">{errors.adTitle.message}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea
                                    {...register("adDescription", {
                                        required: "Ad Description is required*",
                                    })}
                                    className="form-input"
                                    placeholder="Describe your advertisement"
                                />
                                {errors.adDescription && (
                                    <p className="error-text">{errors.adDescription.message}</p>
                                )}
                            </div>


                            <div className="form-group">
                                {/* <label className="form-label">Advertisement Title</label> */}
                                <input
                                    {...register("adUrl", { required: "Ad URL is required*" })}
                                    className="form-input"
                                    placeholder="Enter Ad URL"
                                />
                                {errors.adTitle && (
                                    <p className="error-text">{errors.adUrl.message}</p>
                                )}
                            </div>


                            <div className="form-group">
                                {/* <label className="form-label">Ad Category</label> */}
                                <select
                                    {...register("adCategory", { required: "Select a category*" })}
                                    className="form-input">
                                    <option value="">Select a category</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Food">Food</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Fashion">Fashion</option>
                                </select>
                                {errors.adCategory && (
                                    <p className="error-text">{errors.adCategory.message}</p>
                                )}
                            </div>

                            {/* Hoarding Preferences */}

                            <div className="form-group">
                                {/* <label className="form-label">Ad Category</label> */}
                                <select
                                    {...register("hoardingType", { required: "Select a hoarding type*" })}
                                    className="form-input">
                                    <option value="">Select a Hoarding Type</option>
                                    <option value="Unipole">Unipole</option>
                                    <option value="Billboard">Billboard</option>
                                    <option value="Gantry">Gantry</option>
                                    <option value="Digital">Digital</option>
                                </select>
                                {errors.adCategory && (
                                    <p className="error-text">{errors.hoardingType.message}</p>
                                )}
                            </div>


                            <div className="form-group">
                                {/* <label className="form-label">Hoarding Size</label> */}
                                <select
                                    {...register("hoardingSize", {
                                        required: "Select a hoarding size*",
                                    })}
                                    className="form-input"
                                >
                                    <option value="">Select size</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                                {errors.hoardingSize && (
                                    <p className="error-text">{errors.hoardingSize.message}</p>
                                )}
                            </div>

                            <div className="form-group">
                            <label htmlFor="start-date">Start Date:</label>
                            <input
                                type="date"
                                id="start-date"
                                {...register("startDate", { required: "Start date is required" })}
                                className="form-input"
                            />
                            {errors.startDate && <p>{errors.startDate.message}</p>}
                            </div>

                            <div className="form-group">
                            <label htmlFor="end-date">End Date:</label>
                            <input
                                type="date"
                                id="end-date"
                                {...register("endDate", { required: "End date is required" })}
                                className="form-input"
                            />
                            {errors.endDate && <p>{errors.endDate.message}</p>}
                            </div>

                            <div className="form-group">
                            <select id="location" {...register("location", { required: "State is required" })}className="form-input">
                                <option value="">Select a state</option>
                                {statesOfIndia.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                            {errors.location && <p>{errors.location.message}</p>}
                            </div>


                            <div className="form-group">
                                <input
                                    type="file"
                                    id="adContent"
                                    name="adContent"
                                    className="form-input"
                                    accept="image/, video/"
                                    required
                                ></input>
                            </div>

                            {/* Payment & Billing
                <div className="form-group">
                <label className="form-label">Billing Address</label>
                <input
                    {...register("billingAddress", { required: "Billing Address is required" })}
                    className="form-input"
                    placeholder="Enter billing address"
                />
                {errors.billingAddress && <p className="error-text">{errors.billingAddress.message}</p>}
                </div>

                <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select {...register("paymentMethod", { required: "Select a payment method" })} className="form-input">
                    <option value="">Select payment method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Net Banking">Net Banking</option>
                </select>
                {errors.paymentMethod && <p className="error-text">{errors.paymentMethod.message}</p>}
                </div> */}

                            {/* Additional Notes */}
                            <div className="form-group">
                                {/* <label className="form-label">Special Requests (Optional)</label> */}
                                <textarea
                                    {...register("specialRequests")}
                                    className="form-input"
                                    placeholder="Any special requests?"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="submit-btn">
                                Submit Details
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};