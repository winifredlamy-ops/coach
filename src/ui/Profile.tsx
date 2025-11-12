import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconUser: React.FC = () => <Svg path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
const IconPhone: React.FC = () => <Svg path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
const IconMail: React.FC = () => <Svg path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
const IconMapPin: React.FC = () => <Svg path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
const IconSettings: React.FC = () => <Svg path="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
const IconHelpCircle: React.FC = () => <Svg path="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01" />
const IconLogOut: React.FC = () => <Svg path="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" />
const IconDollar: React.FC = () => <Svg path="M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
const IconCalendar: React.FC = () => <Svg path="M3 4h18v18H3z M3 10h18 M9 2v4 M15 2v4" />
const IconChevronRight: React.FC = () => <Svg path="M9 18l6-6-6-6" />
const IconClock: React.FC = () => <Svg path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-6V7h2v4h4Z" />
const IconMessage: React.FC = () => <Svg path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
const IconHeadphones: React.FC = () => <Svg path="M3 14v-4a9 9 0 0 1 18 0v4M6 14h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2M18 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
const IconGift: React.FC = () => <Svg path="M20 12v10H4V12 M2 7h20v5H2z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
const IconVideo: React.FC = () => <Svg path="M23 7l-7 5 7 5V7z M16 5H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
const IconActivity: React.FC = () => <Svg path="M22 12h-4l-3 9L9 3l-3 9H2" />
const IconFileText: React.FC = () => <Svg path="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
const IconInfo: React.FC = () => <Svg path="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4 M12 8h.01" />
const IconBook: React.FC = () => <Svg path="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z M18 2v20" />
const IconCreditCard: React.FC = () => <Svg path="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22" />

interface StatItem {
	label: string
	value: string | number
}

const stats: StatItem[] = [
	{
		label: '个人卡',
		value: 3
	},
	{
		label: '企业卡',
		value: 0
	},
	{
		label: '培训课',
		value: 0
	}
]

interface MenuItem {
	icon: React.ReactNode
	label: string
	action: () => void
	color?: string
}

export const Profile: React.FC = () => {
	const navigate = useNavigate()

	const menuItems: MenuItem[] = [
		{
			icon: <IconClock />,
			label: '设置空闲时间段',
			action: () => navigate('/profile/time-slot')
		},
		{
			icon: <IconGift />,
			label: '我的推荐',
			action: () => console.log('我的推荐')
		},
		{
			icon: <IconMessage />,
			label: '我的消息',
			action: () => console.log('我的消息')
		},
		{
			icon: <IconVideo />,
			label: '我的录像',
			action: () => console.log('我的录像')
		},
		{
			icon: <IconActivity />,
			label: '我的活动',
			action: () => console.log('我的活动')
		},
		{
			icon: <IconBook />,
			label: '关注公众号',
			action: () => console.log('关注公众号')
		},
		{
			icon: <IconFileText />,
			label: '协议与条款',
			action: () => console.log('协议与条款')
		},
		{
			icon: <IconHeadphones />,
			label: '联系客服',
			action: () => console.log('联系客服')
		},
		{
			icon: <IconInfo />,
			label: '关于',
			action: () => console.log('关于')
		},
		{
			icon: <IconLogOut />,
			label: '退出登录',
			action: () => console.log('退出登录'),
			color: 'var(--danger)'
		}
	]

	return (
		<div className="page">
			<div className="mine-header">
				<h1 className="page-title">我的</h1>
			</div>
			<div className="profile-header">
				<div className="avatar-section">
					<div className="avatar">
						<IconUser />
					</div>
					<div className="user-info">
						<h2 className="username">张教练</h2>
						<button className="edit-profile">编辑资料</button>
					</div>
				</div>
			</div>


			<div className="stats-section">
				<div className="stats-grid">
					{stats.map((stat, index) => (
						<div key={index} className="stat-card">
							<div className="stat-value-large">{stat.value}</div>
							<div className="stat-label-large">{stat.label}</div>
						</div>
					))}
				</div>
			</div>

			<div className="menu-section">
				<div className="menu-list">
					{menuItems.map((item, index) => (
						<button
							key={index}
							className="menu-item card"
							onClick={item.action}
							style={{ color: item.color }}
						>
							<div className="menu-content">
								<div className="menu-icon">
									{item.icon}
								</div>
								<span className="menu-label">{item.label}</span>
							</div>
							<IconChevronRight />
						</button>
					))}
				</div>
			</div>

			<div className="membership-status">
				<IconCreditCard />
				<span>开机(导师月卡2025/10/30～2025/11/28)</span>
				<IconChevronRight />
			</div>

		</div>
	)
}