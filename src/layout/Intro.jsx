import React from 'react';

import Buttons from './../components/buttons/Buttons.jsx';

class Intro extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tab: 'backstory'
    };
    
    this.setButton = this.setButton.bind(this);
  }
  
  get tabs() {
    return ['backstory', 'details'];
  }
  
  setButton(tab) {
    this.setState({tab});
  }
  
  get content() {
    switch(this.state.tab) {
      case 'backstory':
        return this.backstory;
      case 'details':
        return this.details;
      default:
        break;
    }
  }
  
  get backstory() {
    return (
      <div className="intro-card-content">
        <p><b>tl;dr Scroll down and see what I created below :)</b></p>
        <p>
          One idea I had for a small project was to redesign the student groups
          page of my school’s &nbsp;
          <a href="https://asa.mit.edu/groups/">Association of Student Activities website</a>
          . The group page of the website provides details about the
          hundreds of student groups on campus, including name, status, 
          description, and meeting times.
        </p>
        <p>
          As you can see by either down below or the link above, the website is 
          very bland and outdated.  As an officer of one of the
          student groups, I would visit this page a couple of times a semester 
          and each time be turned off by the poor design and styling.
        </p>
        <p>
          I knew I could design something better so, as a small project, I
          decided to do just that and update the group page.  I decided to use 
          the Material Design style for the update. Although there are many 
          Material Design libraries out there (MUI, Material Design Light, 
          Materialize), I chose to forgo using any of them and instead write 
          my own CSS and React components, giving myself control all the states, 
          animations, and functionality.  
        </p>
        <p>
          View my work below.  The first tab, Old, is a remake of the current 
          ASA group page.  The second tab, New, is my rendition of the website, 
          the updated version.  The third tab, is a side by side comparison of
          the two pages, with a zoom of half on each.
        </p>
        <p>
          (Because the ASA website is unlikely to be viewed on a mobile screen /
          this was just a small project and I did not want to spend time making
          it so, the web page design is not responsive.)
        </p>
        <p>
          You can check out the code for this project on Github here.
        </p>
        <p>
          Thanks for stopping by.
        </p>
      </div>
    );
  }
  
  get details() {
    return <h1>df</h1>;
  }
  
  render() {
    return (
      <section id="intro">
        <div className="intro-card">
          <h2 className="header-div">Material Design | MIT Student Group Database</h2>
          <Buttons buttonState={this.state.tab}
            setButtonState={this.setButton} buttons={this.tabs}/>
          {this.content}
        </div>
      </section>
    );
  }
}

export default Intro;