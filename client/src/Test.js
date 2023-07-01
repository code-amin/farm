import "./App.css";

const Test = () => {
  return (
    <>
      <div className="head">
        <div className="informations">
          <h1>Informations</h1>
          <table id="customers">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
            </tr>
          </table>
        </div>
        <div className="descriptions">
          <h1>Descriptions</h1>
          <p> Magnifique ferme en bordure de XX....lorem</p>
        </div>
        <div className="carte">
          <h1>This is my Google Maps web page</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      {/* FORM SECTION */}
      <div className="contact">
        <h2>Communiquez avec nous</h2>
      <form action="/test.js">

      <label for="fname">Prénom</label>
    <input type="text" id="fname" name="firstname" placeholder="Votre prénom..."/>

    <label for="lname">Nom de famille</label>
    <input type="text" id="lname" name="lastname" placeholder="Votre nom de famille..."/>

    <label for="Objet">Objet</label>
    <textarea id="Objet" name="Objet" placeholder="Votre message..." />

    <input type="submit" value="Envoyer"/>
    </form>
    </div>
    </div>
    </>
  );
};

export default Test;