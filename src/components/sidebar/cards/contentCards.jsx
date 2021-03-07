import './contentCards.css'
// import { UnorderedListOutlined } from '@ant-design/icons';
export default function Card () 
{
    return (
        <div className="CardRoot">
            <div className="card-body">
                <div className="card-body-header" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{ fontSize: '18px'}}>Q1</span>
                    <span><div style={{ borderRadius: '50%', width: '25px', height: '25px', background: 'rgb(0,122,255,0.1)'}}>
                    </div></span>
                </div>
                <div className="card-body-main">
                    <span>Сколько телевизоров вы используете в вашем хозяйстве?</span>
                </div>
                <hr className="new1" />
            </div>
        </div>
    )
}