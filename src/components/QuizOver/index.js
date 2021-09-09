import React, { Fragment, useEffect, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import Loader from "../Loader";
import Modal from "../Modal";

const QuizOver = React.forwardRef((props, ref) => {
  const {
    levelName,
    score,
    maxQuestions,
    quizLevel,
    percent,
    loadLevelQuestions,
  } = props;
  const [asked, setAsked] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setAsked(ref.current);
  }, [ref]);

  const showModal = (id) => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  const averageGarde = maxQuestions / 2;

  if (score < averageGarde) {
    //********** Recommencer le Quiz **********/

    // setTimeout(() => {
    //   loadLevelQuestions(0);
    // }, 3000);

    //************Recharger le niveau *********/

    setTimeout(() => {
      loadLevelQuestions(quizLevel);
    }, 3000);
  }

  const desision =
    score >= averageGarde ? (
      <Fragment>
        <div className="stepsBtnContainer">
          {quizLevel < levelName.length ? (
            <>
              <p className="successMsg">Bravo, passez au niveau suivant !</p>
              <button
                className="btnResult success"
                onClick={() => loadLevelQuestions(quizLevel)}
              >
                Niveau Suivant
              </button>
            </>
          ) : (
            <>
              <p className="successMsg">
                <GiTrophyCup size="50px" />
                Bravo, vous étes un expert !{" "}
              </p>
              <button
                className="btnResult gameOver"
                onClick={() => loadLevelQuestions(0)}
              >
                Accueil
              </button>
            </>
          )}
        </div>
        <div className="percentage">
          <div className="progressPercent">Réussite : {percent}%</div>
          <div className="progressPercent">
            Note: {score}/{maxQuestions}
          </div>
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <div className="stepsBtnContainer">
          <p className="failureMsg">Vous avez échoué ! </p>
        </div>
        <div className="percentage">
          <div className="progressPercent">Réussite : {percent}%</div>
          <div className="progressPercent">
            Note: {score}/{maxQuestions}
          </div>
        </div>
      </Fragment>
    );

  const questionAnswer =
    score >= averageGarde ? (
      asked.map((question) => {
        return (
          <tr key={question.id}>
            <td>{question.question}</td>
            <td>{question.answer}</td>
            <td>
              <button
                className="btnInfo"
                onClick={() => showModal(question.heroId)}
              >
                Infos
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="3">
          <Loader
            loadingMsg={"Pas de Réponses"}
            styling={{ textAlign: "center", color: "red" }}
          />
        </td>
      </tr>
    );

  return (
    <Fragment>
      {desision}

      <hr />
      <p>Les réponses aux question posées</p>

      <div className="answerContainer">
        <table className="answers">
          <thead>
            <tr>
              <th>Question</th>
              <th>Réponses</th>
              <th>info</th>
            </tr>
          </thead>
          <tbody>{questionAnswer}</tbody>
        </table>
      </div>

      {/*************  Modal ***************/}

      <Modal showModal={openModal} hideModal={hideModal}>
        <div className="modalHeader">
          <h2>Titre</h2>
        </div>
        <div className="modalBody">
          <h3>Titre 2</h3>
        </div>
        <div className="modalFooter">
          <button className="modalBtn">Fermer</button>
        </div>
      </Modal>
    </Fragment>
  );
});

export default React.memo(QuizOver);
