import React from 'react'
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

interface StatItem {
	label: string
	value: string
	icon: React.ReactNode
}

const stats: StatItem[] = [
	{
		label: '本月收入',
		value: '¥12,580',
		icon: <IconDollar />
	},
	{
		label: '本日课程',
		value: '3节',
		icon: <IconCalendar />
	},
	{
		label: '本月课程',
		value: '45节',
		icon: <IconCalendar />
	},
	{
		label: '学员总数',
		value: '28人',
		icon: <IconUser />
	}
]

interface MenuItem {
	icon: React.ReactNode
	label: string
	action: () => void
	color?: string
}

export const Profile: React.FC = () => {
	const menuItems: MenuItem[] = [
		{
			icon: <IconClock />,
			label: '设置上课时间段',
			action: () => console.log('设置上课时间段')
		},
		{
			icon: <IconMessage />,
			label: '我的消息',
			action: () => console.log('我的消息')
		},
		{
			icon: <IconHeadphones />,
			label: '联系客服',
			action: () => console.log('联系客服')
		},
		{
			icon: <IconHelpCircle />,
			label: '帮助与反馈',
			action: () => console.log('帮助')
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
					<div className="coach-info">
						<h2>张教练</h2>
						<p>资深网球教练</p>
					</div>
				</div>
			</div>


			<div className="stats-section">
				<h3>数据统计</h3>
				<div className="stats-grid">
					{stats.map((stat, index) => (
						<div key={index} className="stat-item card">
							<div className="stat-icon">
								{stat.icon}
							</div>
							<div className="stat-content">
								<div className="stat-value">{stat.value}</div>
								<div className="stat-label">{stat.label}</div>
							</div>
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

		</div>
	)
}