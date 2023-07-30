import "./App.css";

const Body = () => {
  return (
    <>
      <div className="head text-[rgb(5,69,47)] px-2">
        <div className="informations mb-[75px]">
          <h1>Informations</h1>
          <span className="font-thin text-[25px]">
            Ferme à vendre (Cause retraite) <br />
            <br />
            Ferme localisée dans la Région Rabat-Kénitra, bordant la route R401,
            dans les Zaèrs, équipée du système d’irrigation localisée
            goutte-à-goutte), sur la moitié de la superficie (soit environ 16
            ha), cette zone est divisée en 4 parcelles destinée aux spéculations
            suivantes, chaque parcelle est de 4 ha:
            <br />
            <br />
            Arboriculture (citron et grenadier), plantées en 2017, est en pré
            production;
            <br />
            <br />
            4 ha sont réservés au fourrage;
            <br />
            <br />
            4 ha au maraichage (céréaliculture en alternance);
            <br />
            <br />
            Pensé en termes de diversification, de marché et des besoins en
            alimentation du bétail, la ferme est équipée du matériel nécessaire
            aux travaux aratoires et leurs accessoires.
            <br />
            <br />
            Le terrain est clôturé, (celui-ci a donné un nom pop. à la ferme :
            firma lmzarba), les infrastructures bâties : les puits, la station
            de tête, le bassin (120 000 m3), l’étable, la bergerie et l’édifice
            principal comprenant le magasin, la salle de repos et le garage.
            <br />
            <br />
            Un poste moyenne tension de 50 KVA, distribue l’électricité, sur la
            ferme et un compteur basse tension, alimente les logis.
            <br />
            <br />
            La superficie totale est de 34 ha.
            <br />
            <br />
            De Rabat, à environ 130 km, par la route R401, avec prise à même la
            route R401.
            <br />
            <br />
            <br />
          </span>
          <table id="customers">
            <tr>
              <th></th>
              <th>Études et rapports</th>
              <th>Organisme</th>
            </tr>
            <tr>
              <td>✅</td>
              <td>Plan d’aménagement Irrigation localisée Goutte à Goutte</td>
              <td> ISAGRI, sarl, Sidi Allal-el-Bahraoui</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>Électrification, moyenne tension, étude et réalisation </td>
              <td> ONEE Khémisset</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>Étude de rentabilité, demandée par le Crédit agricole</td>
              <td>H. Med Ourara-Kénitra agronome</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>
                Étude du potentiel hydraulique (demandée par Gestion du bassin
                du Bouregreg)
              </td>
              <td>Ben Slimane</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>Étude des sols </td>
              <td>IAV-Rabat</td>
            </tr>
            <tr>
              <td>✅</td>
              <td>
                Infrastructures bâties : plan et supervision des réalisations
              </td>
              <td> Cabinet My Brahim Alaloui, Architecte-Urbaniste </td>
            </tr>
          </table>
        </div>

        <br />
        <a href="https://goo.gl/maps/RvLPWgxHvaJfiSks6">
          Voir sur Google Maps 🌍
        </a>
        <div className="carte mb-[75px]">
          <div style={{ width: "100%" }}>
            <iframe
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=33.219778%20%20-6.6228346+(Ferme%20Les%20Ricins)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="600"
              frameborder="0"
            >
              <a href="https://www.gps.ie/sport-gps/">bike gps</a>
            </iframe>
          </div>
        </div>

        {/* FORM SECTION */}
        <h3>
          {/* Pour plus d'informations, veuillez remplir le formulaire ci-dessous. */}
        </h3>
        
        <button className="contact text-center  text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 mr-6 mb-6 ">
          <a href="mailto:rouif401@gmail.com?subject=Demande d'information - Ferme">
            {/* <span className=" text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 text-center mr-6 mb-6 w-1/5"> */}
             Communiquez avec nous
            {/* </span> */}
          </a>
          {/* <form action="contact.php" method="post">
            <input type="text" name="first_name" />
            <br />
            <input type="text" name="last_name" />
            <br />
            <input type="text" name="email" />
            <br />
            <br />
            <textarea rows="5" name="message" cols="30"></textarea>
            <br />
            <input type="submit" name="submit" value="Submit" />
          </form> */}
        </button>
      </div>
    </>
  );
};

export default Body;
