import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden>
		<path d={path} fill="currentColor" />
	</svg>
)

export const Home: React.FC = () => {
	const navigate = useNavigate()
	const [selectedTab, setSelectedTab] = useState('个人卡')
	const [selectedCard, setSelectedCard] = useState('储值卡')

	return (
		<div className="page home-page">
			{/* TT Tennis 品牌展示区域 */}
			<div className="brand-header">
				<div className="brand-logo">
					<div className="logo-circle">
						<span className="logo-text">T</span>
					</div>
				</div>
				<div className="brand-title">
					<h1>TT TENNIS</h1>
					<p className="brand-subtitle">Step by step</p>
				</div>
				<div className="indicator-dots">
					<span className="dot active"></span>
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
			</div>

			{/* 场地信息卡片 */}
			<div className="venue-card">
				<div className="venue-header">
					<div className="venue-logo">T</div>
					<div className="venue-info">
						<h2>TT网球-24H 南油店 <span className="dropdown-arrow">▼</span></h2>
						<p className="venue-line">11/12号线，南山地铁站C出口步行2分钟</p>
					</div>
				</div>

				<div className="contact-info">
					<div className="phone-section">
						<span className="contact-label">电话/微信</span>
						<span className="phone-number">17727578701</span>
						<Svg path="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z" className="phone-icon" />
					</div>
					<div className="address-section">
						<span className="address-text">深圳市南山区南山大道南油第四工业区7A栋3楼</span>
						<Svg path="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" className="location-icon" />
					</div>
				</div>

				{/* 设施信息 */}
				<div className="facility-tags">
					<div className="facility-row">
						<span className="facility-label interior">内部</span>
						<span className="facility-text">双机录像、24H自助、淋浴间、更衣室、寄存柜、男女双卫、超大电视看球赛、电玩游戏</span>
						<Svg path="M9 18l6-6-6-6" className="chevron-right" />
					</div>
					<div className="facility-row">
						<span className="facility-label surrounding">周边</span>
						<span className="facility-text">瑞幸、库迪、八合里、天台烧烤、来福士</span>
					</div>
				</div>
			</div>

			{/* 三个操作按钮 */}
			<div className="action-buttons">
				<button className="action-btn book-court" onClick={() => navigate('/booking')}>
					<Svg path="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" className="btn-icon" />
					<span className="btn-text">去订场</span>
				</button>
				<button className="action-btn new-customer">
					<Svg path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" className="btn-icon" />
					<span className="btn-text">新客必读</span>
				</button>
			</div>

			{/* 卡券选择 */}
			<div className="card-selection">
				<div className="card-tabs">
					<button
						className={`tab ${selectedTab === '个人卡' ? 'active' : ''}`}
						onClick={() => setSelectedTab('个人卡')}
					>
						个人卡
					</button>
					<button
						className={`tab ${selectedTab === '企业卡' ? 'active' : ''}`}
						onClick={() => setSelectedTab('企业卡')}
					>
						企业卡
					</button>
				</div>

				<div className="card-types">
					{['储值卡', '权益卡', '月卡', '周卡', '长期卡'].map((cardType) => (
						<button
							key={cardType}
							className={`card-type ${selectedCard === cardType ? 'active' : ''}`}
							onClick={() => setSelectedCard(cardType)}
						>
							{cardType}
						</button>
					))}
				</div>

				<div className="selected-card-title">
					<h3>储值卡</h3>
				</div>
			</div>
		</div>
	)
}