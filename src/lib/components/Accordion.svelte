<ul>
  <li>
    <input type="checkbox" checked />

    <i />

    <div class="heading">
      <slot name="header">Header</slot>
    </div>

    <p class="no-select">
      <slot />
    </p>
  </li>
</ul>

<style>
  .heading {
    font-size: larger;
    font-weight: bolder;
  }

  ul li i:before,
  ul li i:after,
  p {
    transition: all 0.25s ease-in-out;
  }

  ul li {
    animation: flipdown 0.5s ease both;
  }

  p {
    position: relative;
    overflow: hidden;
    max-height: 800px;
    transform: translate(0, 0);
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    position: relative;
    padding: 1rem 0;
    border-top: 1px dotted var(--border-color-gray);
    animation-delay: 0.5s;
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
