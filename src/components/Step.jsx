import React from "react";
import "../styles/Step.css";

const Step = () => {
  return (
    <div className="step-container row flex-lg-row align-items-center g-5 py-5">
      <div className="step-col-text col-sm-6">
        <h1 className="fx-bold lh-4 mb-3">How to make your donation?</h1>
        <p className="lead">
          This is a very simple step by step guide for you to contribute to the
          planet 🌱
        </p>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            class="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
            class="active"
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <title>Step 1</title>
            <p className="lead step-text-class">
              Make sure you have MetaMask extension installed, you can download
              it from Here! And connect you wallet, by clicking on the MetaMask
              logo in the upper right corner
            </p>
          </div>
          <div className="carousel-item">
            <title>Step 2</title>
            <p className="lead step-text-class">
              Once you’re connected, make sure that you’re using the rinkeby
              test net by clicking on the top button on MetaMask extension (make
              sure that you can see the test nets )
            </p>
          </div>
          <div className="carousel-item">
            <title>Step 3</title>
            <p className="lead step-text-class">
              Click on the “mint NFT” button that is on the header or just click
              on this button below 👇🏻
            </p>
          </div>
          <div className="carousel-item">
            <title>Step 4</title>
            <p className="lead step-text-class">
              Select the amount of USD that you want to contribute, and click on
              the donate button!
            </p>
          </div>
          <div className="carousel-item">
            <title>Step 5</title>
            <span className="lead step-text-class">
              You are ready to go, with this you’ll get a different NFT
              depending on the amount of USD you have donated, The NFT will mint
              by itself at your wallet, you can see it on different platforms
              like OpenSea.com ✨
            </span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Step;
