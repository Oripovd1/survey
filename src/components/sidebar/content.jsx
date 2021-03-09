import './content.css'
import ContentCards from './cards/contentCards'
import { useSelector } from 'react-redux'
// import { useZoomPanHelper } from 'react-flow-renderer'
// const { setCenter } = useZoomPanHelper();
export default function Rel ()
{
    const onSelectedClicked = (e) => {
        console.log(e)
        // setCenter(e.position.x, e.position.y, 1.5)
    };

    const questions = useSelector((state) => state.questions.questions)
    console.log(questions)
    return (
        <div>
            <div style={{ height: '100px', background: 'orange', placeItems: 'center' }}>
                <div className="Header_title">
                    <h2>Список вопросов</h2>
                </div>
            </div>
            { questions.map(el => <ContentCards onSelectedClicked={onSelectedClicked} qs={el} key={el.id} /> )}
        </div>
    )
}