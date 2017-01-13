var React = require('react');
{/* We always load the react library. Anything not a child is not 'required'*/}



var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
        <p>Joker: You wanna know how I got these scars? My father was... a drinker,
          and a fiend. And one night, he goes off crazier than usual. Mommy gets the
          kitchen knife to defend herself. He doesn't like that, not one bit. So,
          me watching he takes the knife to her, laughing while he does it. He turns
          to me and he says: "Why so serious?". He comes at me with the knife
          "Why so serious?". He sticks the blade in my mouth. "Let's put a smile on
          that face." and... Why so serious?</p>

  <p>Alfred: Every year, I took a holiday. I went to Florence, this cafe on the banks
    of the Arno. Every fine evening, I would sit there and order a Fernet Branca.
    I had this fantasy, that I would look across the tables and I would see you there
     with a wife maybe a couple of kids. You wouldn't say anything to me, nor me to you.
     But we would both know that you've made it, that you were happy. I never wanted you
     to come back to Gotham. I always knew there was nothing here for you except pain
     and tragedy and I wanted something more for you than that. I still do.</p>

  <p>Joker: You wanna know how I got them? So I had a wife. She was beautiful,
    like you, who tells me I worry too much, who tells me I ought to smile more,
     who gambles and gets in deep with the sharks. Hey. One day they carve her face.
     And we have no money for surgeries. She can't take it. I just wanna see her smile
     again. I just want her to know that I don't care about the scars. So, I do this
     to myself. And you know what? She can't stand the sight of me. She leaves. Now
     I see the funny side. Now I'm always smiling.</p>
    </div>
  );

}
module.exports = About;
