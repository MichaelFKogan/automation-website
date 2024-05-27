import Button from '@/app/ui/Button';
import React from 'react';

export default function Success() {
  return (
    <>
      <div className="nk-header"></div>
      <main className="nk-pages">
        <section className="section section-lg has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around" />
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <div className="block-text text-center">
                        <h6 className="overline-title smaller text-success mb-0">
                          Registration Successful !
                        </h6>
                        <h3 className="title">Welcome to CopyGen family</h3>
                        <p>
                          Now login with your password supercharge your creative
                          copywriting.
                        </p>
                        <ul className="btn-list btn-list-inline g-0">
                          <li>
                            <Button
                              href="login"
                              btnText="Login Here"
                              btnClass="btn btn-primary"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
