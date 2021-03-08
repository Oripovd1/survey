import './navbar.css'
import { Avatar } from 'antd'
import {
  SearchOutlined,
  HighlightOutlined,
  SettingOutlined,
  BarChartOutlined,
  FolderOpenOutlined,
  CopyOutlined,
} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
  const history = useHistory()
  return (
    <div className='navbar_header_main'>
      <div className='a-row a-justify-center'>
        <h2 style={{ color: 'white', padding: '14px  10px 0' }}>OxBox</h2>
      </div>
      <div className='a-row a-justify-center'>
        <div className='a-col'>
          <button onClick={() => history.push('/')}>
            <HighlightOutlined style={{ fontSize: '18px', color: '#FFFFFF' }} />{' '}
            АНКЕТА
          </button>{' '}
        </div>
        <div className='a-col'>
          <button>
            <SettingOutlined style={{ fontSize: '18px', color: '#FFFFFF' }} />{' '}
            Настройки
          </button>
        </div>
        <div className='a-col'>
          <button>
            <FolderOpenOutlined
              style={{ fontSize: '18px', color: '#FFFFFF' }}
            />{' '}
            Сбор ответов
          </button>
        </div>
        <div className='a-col'>
          <button>
            <BarChartOutlined style={{ fontSize: '18px', color: '#FFFFFF' }} />{' '}
            Резултаты
          </button>
        </div>
        <div className='a-col'>
          <button onClick={() => history.push('/example')}>
            <CopyOutlined style={{ fontSize: '18px', color: '#FFFFFF' }} />{' '}
            Пример опроса
          </button>
        </div>
      </div>
      <div className='a-row a-justify-center a-align-center margin_left'>
        <div className='a-col'>
          {<SearchOutlined style={{ fontSize: '18px', color: '#FFFFFF' }} />}
        </div>
        <div className='a-col' style={{ padding: '10px' }}>
          <Avatar
            size='large'
            src='https://www.thefamouspeople.com/profiles/images/og-inna-38565.jpg'
          />
        </div>
      </div>
    </div>
  )
}
export default Navbar
