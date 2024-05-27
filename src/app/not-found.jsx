import Link from 'next/link';
import Image from 'next/image';
export default function NotFound() {
  return (
    <>
      <section className="section has-mask min-vh-100 d-flex flex-column">
        <div className="nk-mask bg-pattern-dot bg-blend-around" />
        <div className="container my-auto">
          <div className="section-content">
            <div className="row g-gs justify-content-center">
              <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                <div className="block-gfx mt-n5">
                  <Image
                    className="w-100 rounded-4"
                    src="/images/gfx/error/404.svg"
                    alt="404"
                    width={485}
                    height={291}
                  />
                </div>
                <div className="block-text text-center mt-4">
                  <h3 className="title">Oops! Why you’re here?</h3>
                  <p>
                    We are very sorry for inconvenience. It looks like you’re
                    try to access a page that either has been deleted or never
                    existed.
                  </p>
                  <ul className="btn-list btn-list-inline g-0">
                    <li>
                      <Link className="btn btn-primary" href="/">
                        <span>Back to Home</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
