import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Grid from "../../components/grid/Grid"
import { Modal } from "../../components/modal/Modal"
import "./GamePage.css"
import { images } from "../../data";
import useGame from "../../components/useGame";

export function GamePage() {

    const { finishedItems, handleReset, stepsCount, checkItems, isWin } = useGame(images);
    
    return (
        // <Header/>
        <section className="game container">
            <Header/>

            <div className="steps">
                <p>
                    {stepsCount}
                </p>
            </div>
            
            <Grid 
                images = {images}
                finishedItems = {finishedItems}
                checkItems = {checkItems}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">
                        Победа!
                    </h3>
                    <p className="modal-desc">
                        Вы собрали все пары за {stepsCount} шагов.
                    </p>
                    <button
                        className="button modal-button"
                        type="button"
                        onClick={handleReset}
                    >
                        Новая игра
                    </button>
                </Modal>
            )}
            <Footer/>
        </section>
    );
}