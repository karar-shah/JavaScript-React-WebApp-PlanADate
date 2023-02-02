import React from "react";
import ContainedButton from "../components/containedButton";
import Input from "../components/input";
import OutlinedButton from "../components/outlinedButton";
import logo from "../asserts/logo/Logo.png";
import groupLogo from "../asserts/images/Group 1153.png";

export default function Login() {
    return (
        <div className="wrapper">
            <div className="container">
                <img className="main-logo" src={logo} alt="logo" />
                <img className="group-logo" src={groupLogo} alt="Group" />
                <form className="main-form">
                    <h1 className="form-heading">Login To Your Account</h1>
                    <h6 className="form-sub-heading">
                        Please enter your login details.
                    </h6>
                    <Input name="email" type="text" placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                    <div className="remember-container">
                        <div className="form-control">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                value="remember"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="javascript:void(0)">Forget Password</a>
                    </div>
                    <ContainedButton />
                    <hr />
                    <a href="javascript:void(0)">Don't have a Account?</a>
                    <OutlinedButton />
                </form>
            </div>
        </div>
    );
}
