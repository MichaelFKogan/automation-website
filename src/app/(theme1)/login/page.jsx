import InputFieldPassword from '@/app/ui/FormField/InputFieldPassword';
import SectionHeading from '@/app/ui/SectionHeading';
import SocialWidget2 from '@/app/ui/Widget/SocialWidget2';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <>
      <div className="nk-header" />
      <section className="section section-bottom-0 pb-5 has-mask">
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
        <div className="container">
          <SectionHeading
            overlineTitle="Welcome Back!"
            title="Login to countinue"
          />
          <div className="section-content">
            <div className="row g-gs justify-content-center">
              <div className="col-md-7 col-lg-6 col-xl-5">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <form action="/">
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="emailorusername"
                            >
                              Email or Username
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="email"
                                name="emailorusername"
                                id="emailorusername"
                                className="form-control form-control-lg"
                                placeholder="Enter Email or Username"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="toggle-password"
                            >
                              Password
                            </label>
                            <InputFieldPassword />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex flex-wrap justify-content-between has-gap g-3">
                            <div className="form-group">
                              <div className="form-check form-check-sm">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="rememberMe"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="rememberMe"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <Link href="reset" className="small">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                              id="submit-btn"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <div className="small mb-3">or login with</div>
                          <SocialWidget2 />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <p className="text-center mt-4">
                  {`Don't have an account? `}
                  <Link href="register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
