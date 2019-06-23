import React, { Component } from 'react'

export default class Review extends Component {
  render() {
    return (
      <div>
 

<div class="row">
  <div class="column">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="Jane" style="width:100%"/>
      <div class="container">
        <h2>Marcus Glavin</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="Mike" style="width:100%"/>
      <div class="container">
        <h2>Louis Fabrizio</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="John" style="width:100%"/>
      <div class="container">
        <h2>Nate Kwapo</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="Mike" style="width:100%"/>
      <div class="container">
        <h2>Jose Marte</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="Mike" style="width:100%"/>
      <div class="container">
        <h2>Kyle Mayer</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>

      
    )
  }
}
