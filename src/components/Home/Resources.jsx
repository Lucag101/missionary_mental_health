import React, { useState } from "react";
import '../../styles/sharedStyles.css'

function Resources() {
  

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mb-4">Resources Page</h1>
        <div className="prettyDiv">
          <p>If you or someone you know is in crisis, contact the Suicide Prevention Lifeline at 1-800-273-TALK (8255), or dial 911 in case of emergency.</p>
        </div>
        <section class="featureSection">
          <div class="container px-5 my-5">
            <div class="row gx-5">
              <div class="col-lg-4 mb-5 mb-lg-0 featureColumn">
                <div class="feature"><i class="bi bi-collection"></i></div>
                <h2 class="h4 fw-bolder">Physical Care</h2>
                <p>While being on your mission has a spiritual emphasis and focus, it's also important to take care of yourself physically. Read how you can maintain a healthy physical balance in your life while caring for your spirituality as well.</p>
                <a class="text-decoration-none ella-a" target="blank" href="https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health">
                  More on Physical Health
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
              <div class="col-lg-4 mb-5 mb-lg-0 featureColumn">
                <div class="feature"><i class="bi bi-collection"></i></div>
                <h2 class="h4 fw-bolder">Online Resources</h2>
                <p>Read about how the LDS Church offers resources for varieties of common problems and issues for both missionaries and other members of the Church.</p>
                <a class="text-decoration-none ella-a" href="https://www.churchofjesuschrist.org/study/manual/counseling-resources?lang=eng">
                  More on LDS Counseling Resources
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
              <div class="col-lg-4 mb-5 mb-lg-0 featureColumn">
                <div class="feature"><i class="bi bi-collection"></i></div>
                <h2 class="h4 fw-bolder">Common Ground</h2>
                <p>Read about how missionaries in the LDS chuch have overcome their personal struggles with mental health on their missions.</p>
                <a class="text-decoration-none ella-a" target="blank" href="https://www.churchofjesuschrist.org/study/ensign/2020/09/young-adults/for-missionaries-struggling-with-mental-health?lang=eng">
                  More on LDS Missionary Mental Health
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}

export default Resources;
