import './contentCards.css'
import { UnorderedListOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
// import { useSelector, useDispatch } from 'react-redux'

export default function Card (props) 
{
    // const reactflowInstance = useSelector((state) => console.log(state))
    // console.log(reactflowInstance)
    return (
        <div className="CardRoot" onClick={() => props.onSelectedClicked(props.qs)}>
            <div className="card-body">
                <div className="card-body-header" style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{ fontSize: '18px'}}>{props.qs.data.number}</span>
                    <span>
                        <Avatar style={{ backgroundColor: 'rgb(0, 122, 255, 0.1)' }} size={25} icon={<UnorderedListOutlined style={{ color: 'rgb(0, 122, 255)'}} />} />
                    </span>
                </div>
                <div className="card-body-main">
                    <span>{props.qs.data.label}</span>
                </div>
                <hr className="new1" />
            </div>
        </div>
    )
}