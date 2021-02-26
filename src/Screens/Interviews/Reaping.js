import React from "react";
import Reapings from "../../Assets/images/reaping.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";
function Reaping(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Reapings} alt="" className="interviewImage" />
          <p>
            Internationally renowned economist, Professor Adam Smith, in his
            popular book, “the wealth of Nations”, spoke extensively on the
            politics of demand and supply in the marketing goods and services.
            For instance, he posts that the market orientation of individual
            goods and services necessarily makes them to be admired and
            purchased by willing customers
          </p>
          <p>
            This marketability phenomenon could also apply to individual
            businessmen and politics for an ideal competition-whether for
            political power and economic gain, the market value of individuals
            often tend to decide how they succeed or fail in the endeavor. An
            intellectually, morally and physically dislocated individual will
            often be seen as a taboo in economic or political market. In
            business life, the key phrases are courage and determination of
            these and personal charisma, should ideally make one to succeed and
            tower above all others who lack in them.
          </p>
          <p>
            This could be true of Chief Sunny Nlewemdim, the flamboyant Chairman
            and Chief Executive of Interbond Nigeria Ltd and Interbond Finance
            and Securities Ltd.
          </p>
          <p>
            In his early forties Chief Nlewemdim has displayed a rare business
            acumen and investment wisdom by daring to invest in an economy that
            is as perilous and unpredictable as it is gloomy. It was indeed his
            sheer sense of patriotism and theurge to take up challenges that
            drove him to the top where he is today comfortably seated.
          </p>
          <p>
            Chief Sonny Nlewemdim, whose research saw wisdom in adding glamor in
            lighting and lamps manufacturing and marketing, started first with
            the importation of electrical chandeliers and later went into its
            local manufacturing in partnership with foreign associates. Within a
            short period, his company is today able to capture a large sector of
            the market which it is determined to completely take over. His
            strong advocacy for industrialization of the nation's economy
            through private sector effort over the years has encouraged our
            youths to adopt the production of goods and services as a necessary
            step to economic development and to give them a push, Chief
            Nlewemdim was chosen last year as one of the investors that
            performed creditably in championing the economic vista of Nigeria in
            acknowledgement of the place of the private sector effort in the
            nation's economic rejuvenation.
          </p>
          <p>
            An epitome of success Chief Sonny Nlewemdim even at first sight
            looks successful, smells success and in fact dresses successfully
            too with his looks and elegance, coupled with the confidence he
            exudes in discussing about industrialization and economy, the
            Interbond Group Chairman and Chief Executive would only have the sky
            as his limit to greater achievements.
          </p>
          <p>
            For even in terms of competence and good mission, his ability of
            effectively managing human resource element of Interbond Group and
            other factors of production, clearly stand him in good stead{" "}
          </p>
        </div>
        <div className="side-bar">
          <Sidenav />
        </div>{" "}
      </section>
      <button className="myButton">
        <Link to="/">
          <h3>home page</h3>
        </Link>
      </button>
    </>
  );
}

export default Reaping;
