import React from "react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <section className="start-section">
        <StaticImage
          src="../assets/images/stars.png"
          alt="stars"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="stars"
        />
        <StaticImage
          src="../assets/images/moon.png"
          alt="the moon"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="moon"
        />
        <StaticImage
          src="../assets/images/mountains_behind.png"
          alt="behind mountains"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="mountains_behind"
        />

        <h2 className="middle-text" id="text-moonlight">
          Moonlight
        </h2>

        <Button
          href="#textdiv"
          className="middle-button"
          id="middle_button"
          text="Explore"
        />

        <StaticImage
          src="../assets/images/mountains_front.png"
          alt="front mountains"
          placeholder="blurred"
          layout="fullWidth"
          className="images"
          id="mountains_front"
        />
      </section>
      <div className="text-div" id="textdiv">
        <h2>Parallax Scroll Effect</h2>
        <div className="paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit mollis nibh, ac congue neque elementum in. Morbi vitae
            nulla ligula. Vestibulum ullamcorper augue sit amet tellus aliquet
            luctus. In fringilla malesuada efficitur. Vivamus congue tellus mi,
            sed vehicula magna mollis at. Donec elementum elit eu ultrices
            tristique. Nulla non enim tempor sem interdum euismod. Nunc ipsum
            lacus, mollis non metus in, facilisis eleifend arcu. Etiam ut
            tincidunt lacus, in auctor arcu. Praesent ac malesuada neque.
          </p>
          <p>
            Pellentesque sollicitudin, ex vel rhoncus varius, metus nunc laoreet
            dui, eget placerat sem ante id orci. In a libero justo. Nullam quis
            auctor orci. Ut vel bibendum quam. Suspendisse condimentum pretium
            urna et posuere. Duis euismod velit vitae nunc vestibulum pulvinar.
            Ut venenatis ex sed luctus semper. Nulla magna sem, placerat eget
            rhoncus auctor, laoreet vitae ex. Vivamus faucibus dignissim ipsum.
            Sed vel enim non magna posuere mollis ut vel mi. Praesent vel congue
            justo. In est leo, suscipit ac commodo quis, rhoncus et massa.
            Suspendisse potenti. Nunc felis lectus, rhoncus at dui sit amet,
            viverra porta est. Sed sagittis eros at est mollis, ut interdum
            metus porttitor.
          </p>
          <p>
            Nulla maximus justo non nisi mollis, nec tempus felis aliquet.
            Praesent non elit sapien. Aliquam erat volutpat. Suspendisse
            potenti. Nullam rhoncus, enim luctus eleifend mattis, metus urna
            dapibus lorem, sit amet elementum felis magna at est. Duis venenatis
            ut nibh quis vehicula. Nam sed neque sed mauris cursus convallis in
            eu lorem. Duis egestas sed orci ut tincidunt. Phasellus tempus id
            mauris vitae porttitor. Curabitur ullamcorper ultrices ex, id
            eleifend libero elementum fringilla. Sed ut mi sit amet mauris
            aliquet vulputate. Curabitur faucibus consequat magna, vel mattis
            nulla laoreet ac. Maecenas bibendum, est pretium hendrerit interdum,
            purus quam aliquet sapien, ac vestibulum diam nisi ut augue.
            Curabitur non nisi id neque placerat porttitor. Proin gravida urna
            quis lectus vulputate tristique.
          </p>
          <p>
            Cras egestas purus ut ex vestibulum laoreet. Cras dignissim tortor
            nunc, a fringilla risus pretium at. Aenean venenatis odio maximus
            sollicitudin convallis. Aliquam sit amet lacus blandit, molestie leo
            id, efficitur metus. Duis ultricies ipsum eu dui vulputate
            consectetur. Etiam vitae massa ut risus bibendum vulputate porttitor
            sed risus. Proin condimentum, mi non porta convallis, dui leo mattis
            enim, eu gravida ipsum massa quis augue. Integer tincidunt malesuada
            erat, a malesuada magna rhoncus non. Nullam vitae metus porttitor,
            molestie ipsum iaculis, dignissim purus. In pharetra elementum nisl.
            Duis eu odio nisl. Duis tincidunt ligula quis felis euismod aliquet.
            Sed et mollis nisl. Donec condimentum consectetur vestibulum.
          </p>
          <p>
            Aenean lacinia mi et justo accumsan, sit amet feugiat ligula
            malesuada. Aenean ut lobortis metus. Integer efficitur ipsum sit
            amet nunc sodales, eget volutpat nisi laoreet. Nunc lacinia
            convallis placerat. Curabitur augue nisi, tristique vitae turpis id,
            tincidunt suscipit felis. Aliquam arcu quam, blandit at sapien eget,
            vehicula pulvinar urna. Nam rutrum ullamcorper porta. Sed vulputate
            aliquam ligula, vitae sollicitudin lacus aliquet nec. Donec non
            tellus vulputate lorem dignissim laoreet quis id sapien.
            Pellentesque posuere convallis vestibulum.
          </p>
        </div>
      </div>
      <script type="text/javascript">
        (function ()
        {window.addEventListener("scroll", function () {
          let value = window.scrollY
          document.getElementById("stars").style.left = value * 0.25 + "px"
          document.getElementById("moon").style.top = value * 0.75 + "px"
          document.getElementById("mountains_behind").style.top =
            value * 0.5 + "px"
          document.getElementById("text-moonlight").style.marginRight =
            value * 2.5 + "px"
          document.getElementById("text-moonlight").style.textShadow =
            (250 - value) * 0.35 +
            "px " +
            (500 - value) * 0.2 +
            "px " +
            "16px black"
          document.getElementById("text-moonlight").style.marginTop =
            value * 0.3 + "px"
          document.getElementById("middle_button").style.marginTop =
            value * 0.75 + "px"
          document.querySelector("header").style.marginTop = value * 0.75 + "px"
        })}
        )
      </script>
    </Layout>
  )
}

export default Home
