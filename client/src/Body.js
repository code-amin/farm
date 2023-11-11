import "./App.css";

const Body = () => {
  return (
    <>
      <div className="head text-[rgb(5,69,47)] px-2">
        <div className="informations mb-[75px]">
          <h1>Informations</h1>
          <span className="  text-[20px]">
            Ferme à vendre (Cause retraite) <br />
            <br />
            Ferme localisée dans la Région Rabat-Kénitra, bordant la route R401,
            dans les Zaèrs, équipée du système d’irrigation localisée
            goutte-à-goutte) (un système solaire remplace maintenant le système
            électrique sur l’infrastructure goûte à goûte, et devient la
            principale source d’énergie), sur la moitié de la superficie (soit
            environ 16 ha), cette zone est divisée en 4 parcelles destinée aux
            spéculations suivantes, chaque parcelle est de 4 ha:
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7996.769236063381!2d-6.625387422136463!3d33.21981247348188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6b9d9e2cd4bb7%3A0x689fb602ba1afd0e!2sFerme%20Les%20Ricins!5e1!3m2!1sfr!2sca!4v1699460862924!5m2!1sfr!2sca"
            width="1000"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
