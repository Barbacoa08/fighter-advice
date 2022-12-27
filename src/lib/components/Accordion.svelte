<ul>
  <li>
    <input type="checkbox" checked />

    <i />

    <div class="heading">
      <slot name="header">Header</slot>
    </div>

    <p>
      <slot />
    </p>
  </li>
</ul>

<style>
  .heading {
    font-size: larger;
    font-weight: bolder;
  }

  .transition,
  ul li i:before,
  ul li i:after,
  p {
    transition: all 0.25s ease-in-out;
  }

  .flipIn,
  ul li,
  h1 {
    animation: flipdown 0.5s ease both;
  }

  .no-select,
  h2 {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    width: 100%;
    height: 100%;
    perspective: 900;
    overflow-y: scroll;
    /* background-color: #dce7eb; */
    /* font-family: "Titillium Web", sans-serif; */
    /* color: rgba(48, 69, 92, 0.8); */
  }

  body {
    min-height: 0;
    display: inline-block;
    position: relative;
    left: 50%;
    margin: 90px 0;
    transform: translate(-50%, 0);
    box-shadow: 0 10px 0 0 #ff6873 inset;
    background-color: #fefffa;
    max-width: 450px;
    padding: 30px;
  }
  @media (max-width: 550px) {
    body {
      box-sizing: border-box;
      transform: translate(0, 0);
      max-width: 100%;
      min-height: 100%;
      margin: 0;
      left: 0;
    }
  }

  p {
    position: relative;
    overflow: hidden;
    max-height: 800px;
    transform: translate(0, 0);
  }

  ul {
    list-style: none;
    perspective: 900;
    padding: 0;
    margin: 0;
  }
  ul li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
    border-top: 1px dotted var(--border-color-gray);
  }
  ul li:nth-of-type(1) {
    animation-delay: 0.5s;
  }
  ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }
  ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  ul li:last-of-type {
    padding-bottom: 0;
  }
  ul li i {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 16px;
    right: 0;
  }
  ul li i:before,
  ul li i:after {
    content: "";
    position: absolute;
    background-color: #ff6873;
    width: 3px;
    height: 9px;
  }
  ul li i:before {
    transform: translate(-2px, 0) rotate(45deg);
  }
  ul li i:after {
    transform: translate(2px, 0) rotate(-45deg);
  }
  ul li input[type="checkbox"] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }
  ul li input[type="checkbox"]:checked ~ p {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    transform: translate(0, 50%);
  }
  ul li input[type="checkbox"]:checked ~ i:before {
    transform: translate(2px, 0) rotate(45deg);
  }
  ul li input[type="checkbox"]:checked ~ i:after {
    transform: translate(-2px, 0) rotate(-45deg);
  }

  @keyframes flipdown {
    0% {
      opacity: 0;
      transform-origin: top center;
      transform: rotateX(-90deg);
    }
    5% {
      opacity: 1;
    }
    80% {
      transform: rotateX(8deg);
    }
    83% {
      transform: rotateX(6deg);
    }
    92% {
      transform: rotateX(-3deg);
    }
    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }
</style>
