import './content.css'
import ContentCards from './cards/contentCards'
export default function Rel () 
{
    return (
        <div>
            <div style={{ height: '100px', background: 'orange', placeItems: 'center' }}>
                <div className="Header_title">
                    <h2>Список вопросов</h2>
                </div>
            </div>
            <ContentCards />
            <ContentCards />
            <ContentCards />
        </div>
    )
}