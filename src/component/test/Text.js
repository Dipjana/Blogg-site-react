import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from "react-hook-form";

export default function Text() {
    //handle from events
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    // handle submit
    const onSubmit = data => alert(JSON.stringify(data));
    // password 
    const [passwordEye, setPasswordEye] = useState(false);
    const handlePassowrdClick = () => {
        setPasswordEye(!passwordEye)
    }
    // confirm password 
    const [confirmpasswordEye, setconfirmpasswordEye] = useState(false);
    const handleConfirmPassowrdClick = () => {
        setconfirmpasswordEye(!confirmpasswordEye)
    }

    return (
        <>
            <div className="container-sm">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* password  */}
                    <div className="mb-3">
                        <div className="input-group">
                            <input
                                type={(passwordEye === false) ? 'password' : 'text'}
                                className="form-control"
                                placeholder="password"
                                {...register("password", {
                                    required: 'Confirm Password is required',
                                    minLength: {
                                        value: 8,
                                        massage: 'Minimum Required length is 8'
                                    },
                                    maxLength: {
                                        value: 8,
                                        massage: 'Maximum Required length is 10'
                                    }
                                })}
                            />
                            {
                                (passwordEye === false) ? <span className="input-group-text" ><Visibility onClick={handlePassowrdClick} /></span> : <span className="input-group-text" > <VisibilityOff onClick={handlePassowrdClick} /></span>
                            }
                        </div>
                        {errors.password && <span>{errors.password.massage}</span>}
                    </div>

                    {/* confirm password    */}
                    <div className="mb-3">
                        <div className="input-group">
                            <input
                                type={(confirmpasswordEye === false) ? 'password' : 'text'}
                                className="form-control"
                                placeholder="confirm password"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    minLength: {
                                        value: 8,
                                        massage: 'Minimum Required length is 8'
                                    },
                                    maxLength: {
                                        value: 8,
                                        massage: 'Maximum Required length is 10'
                                    }
                                })}
                            />
                            {
                                (confirmpasswordEye === false) ? <span className="input-group-text" ><Visibility onClick={handleConfirmPassowrdClick} /></span> : <span className="input-group-text" > <VisibilityOff onClick={handleConfirmPassowrdClick} /></span>
                            }
                        </div>
                        {errors.confirmPassword && <span>{errors.confirmPassword.massage}</span>}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
