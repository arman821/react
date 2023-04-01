
import './App.css';
import reactlogo from './logo.gif'

function App() {
  return (
    <>
    
<nav class="navbar">
  
  
  <a id="brand" href="#"><img className="logo-nav" src="logo192.png" /></a>
  <ul class="nav-list">
  
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#learn">Learn</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#contact">Contact</a>
    </li>
  </ul>
</nav>


<section  class="hero">
  <h1>Welcome To Our React App</h1>
</section>


<section id="learn" className="section-1">
  <h2 className="sec2-heading">We Can Teach You How To Start With React</h2>
  <iframe  className="iframe"width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</section>
<section id="contact" className="section-2">
  <div className="card">
  <div class="container">
  <h1 className="form-heading">Contact Us</h1>
    <form action="my_redirect_url" method="post"  >
      
      
      <input name="name" type="text" placeholder="Enter Your Name" />
      
      <input name="email" type="email" placeholder="Enter Your Email" />
      
      <textarea name="message" placeholder="Enter Your Message" />
      <input type="submit" />


    </form>
  </div>
  </div>
  </section>
  <section className="section-3">
  <div className="bg">

  </div>
    </section>
  <section className="footer">
    <p>     <a href="https://www.facebook.com/arman.mondal.821"><img className="logo" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/></a>
<a href="https://instagram.com/arman.mondal.821" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvElEQVR4nO2ZTWsUQRCGn0P04pLE+3oQs1nBi/h1EPVg9GziX1GTP6CoR2MOGvHjP4gRsxtJBH+Cq7nHk27EGIyXtaWgGoaB+ejpWbsX9oUX9jBVXe9OVXVNN4wxRhRoA0tAF/gM7AOmJoov8dkBFnWt2nEO2Kgx6LL8CFysQ8AhYAX4G0CEUcraj4GJqiKOAu8DCjApbmhMzm8iRCqZAn4ADrsIWYkgaJPBZZfCDlkTpoAS29kyQmJMKZOitOhctAMH+AZoKtcKnm3lCVkKLKSZiOVYwbN38oR0RkjIep6Q7RqC6QPPgRuaqkeU8nseeAHsZtiuqQDh24J1vuQJ2fMQ8Bu4C0xSjCngntpUXW8vb4GqTndSLfE68Ez/tf3EQLgKXEu1+h2PdTNRVYTN7Vlgq4TNZqLrND3EZKJKOtk3cSUn97Nq6bLangcOQgqRmrBvwkVEUsyM+ngQSkhfi5aS6ZRFmbAF0xX+jFqESIu1hW08Oae+XoYQIvsE2p18hTxVXwshhEhdoC3WV4i0ZkE7hJCG2vyqQYj4EDRGXchP9TU56qnVC5la82qzWoOQJ+rrZgghMsWis5OvkKvq61XoDXHTQ4R8WtsN8UcIIUZHccFx4JvniPKwgn1tQg50FEcHwL6D7XfgktpeCD00mtQYP1PydFLS6YTayNfg14prZ8J4iJFR3GJOx46e7jPCT9qdbGHbN1FVhBnWp66kxn0t2iJMa038Gdan7raHY8tdnWJlADypE0BDfy9oi3XtTsb18CH0cZBx4Ls8IYsRBGhK8laekFYEARrHWS8T3QiCND6njBangUEEwZoMDspeK6B3diZSPsIBE5Gm2Jbr1Rt68RjTpU+35Gab+WaWA1/FDTSdKl9PJ3EKeB1ARAc4wxDQ0puidT3CqePgwVJ89XTHvl10tTbGGPwf/APThWw4L8JxcwAAAABJRU5ErkJggg=="/></a>This React App is Developed By Arman Mondal</p>
  </section>
    </>
  );
}

export default App;
