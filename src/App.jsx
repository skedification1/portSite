import React from 'react';
import './css/app.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import photoProfile from './img/photo2.jpg';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="section">
          <section className="section__one">
            <h1> section_one content</h1>
            <div className="section__one_profile">
              <div className="profile_block">
                <img className="photoProfile" src={photoProfile} alt="photo" />{' '}
                <div className="more">
                  <h2>Click for more</h2>
                  <button className="more_btn">Соц сети</button>
                </div>
              </div>

              <div className="descr">
                <h2 className="descr_title">Описание старта</h2>
                <div className="bio">
                  <div className="bio_item">
                    <h5>ФИО:</h5>
                    <span>Фамилия Имя Отчество</span>
                  </div>
                  <div className="bio_item">
                    <h5>Возраст:</h5>
                    <span>29 лет</span>
                  </div>
                  <div className="bio_item">
                    <h5>Образование: </h5>
                  </div>

                  <div className="bio_item_study">
                    <div className="inf">
                      <h5>Вуз: </h5>
                      <span> Таврическая академия КФУ им. В. И. Вернадского (бывш. ТНУ)</span>
                    </div>
                    <div className="inf">
                      <h5>Факультет:</h5>
                      <span> Физико-технический институт</span>
                    </div>
                    <div className="inf">
                      <h5>Специальность:</h5>
                      <span> Программная инженерия </span>
                    </div>
                  </div>
                </div>

                <div className="descr_text">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi sed
                    perspiciatis fugit reprehenderit accusamus inventore quibusdam cupiditate
                    adipisci ea?
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi sed
                    perspiciatis fugit reprehenderit accusamus inventore quibusdam cupiditate
                    adipisci ea?
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro excepturi sed
                    perspiciatis fugit reprehenderit accusamus inventore quibusdam cupiditate
                    adipisci ea?
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="section__two">section_two content</div>
          <div className="section__three">section_three content</div>
          <div className="section__four">section_four content</div>
          <div className="section__five">section_five content</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
