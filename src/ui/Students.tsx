import React from 'react'
import './Students.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconMapPin: React.FC = () => <Svg path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
const IconClock: React.FC = () => <Svg path="M12 6v6l4 2" />
const IconUsers: React.FC = () => <Svg path="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
const IconCircle: React.FC = () => <Svg path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />

interface Activity {
	id: number
	title: string
	type: '导师陪练局' | 'TT2.5单打比赛' | 'TT网球-室内团课'
	time: string
	date: string
	location: string
	organizer: string
	participants: { current: number; max: number }
	image: string
	area: string
}

const activities: Activity[] = [
	{
		id: 1,
		title: '【导师陪练局】9.21周日20-21点左炮台TT室外场3.5+女高陪...',
		type: '导师陪练局',
		time: '20:00~21:00',
		date: '09/21',
		location: '深圳市 泽芯(国际)无人机测试中心 2号场',
		organizer: 'TT网球俱乐部',
		participants: { current: 0, max: 2 },
		image: '/api/placeholder/120/80',
		area: '南油店'
	},
	{
		id: 2,
		title: '【导师陪练局】9.21周日21-22点左炮台TT室外场3.5+女高陪...',
		type: '导师陪练局',
		time: '21:00~22:00',
		date: '09/21',
		location: '深圳市 泽芯(国际)无人机测试中心 2号场',
		organizer: 'TT网球俱乐部',
		participants: { current: 2, max: 2 },
		image: '/api/placeholder/120/80',
		area: '南油店'
	},
	{
		id: 3,
		title: '【TT2.5单打比赛】9.21周日17-20点，蛇口室外场、不限男女',
		type: 'TT2.5单打比赛',
		time: '17:00~20:00',
		date: '09/21',
		location: '深圳市 泽芯(国际)无人机测试中心 TT左炮...',
		organizer: 'TT网球俱乐部',
		participants: { current: 8, max: 8 },
		image: '/api/placeholder/120/80',
		area: '南油店'
	},
	{
		id: 4,
		title: '【TT网球-室内团课】新手快速入门课 -9月20日（周六）10-1...',
		type: 'TT网球-室内团课',
		time: '10:00~12:00',
		date: '09/20',
		location: '深圳市 TT网球(福田会展店) TT网球会展...',
		organizer: 'TT网球俱乐部',
		participants: { current: 0, max: 4 },
		image: '/api/placeholder/120/80',
		area: '会展店'
	}
]

export const Students: React.FC = () => {
	const getTypeColor = (type: string) => {
		switch (type) {
			case '导师陪练局': return '#10B981'
			case 'TT2.5单打比赛': return '#F59E0B'
			case 'TT网球-室内团课': return '#3B82F6'
			default: return '#6B7280'
		}
	}

	const isFull = (current: number, max: number) => current >= max

	return (
		<div className="page">
			<div className="activities-header">
				<h1 className="page-title">活动</h1>
			</div>

			<div className="activities-list">
				{activities.map((activity) => (
					<div key={activity.id} className="activity-card">
						<div className="activity-content">
							<div className="activity-info">
								<div className="activity-type" style={{ color: getTypeColor(activity.type) }}>
									<IconCircle />
									<span>[{activity.type}]</span>
								</div>
								<h3 className="activity-title">{activity.title}</h3>

								<div className="activity-meta">
									<div className="participants">
										{activity.participants.current}/{activity.participants.max}
									</div>
									<div className="time">
										{activity.date} {activity.time}
									</div>
								</div>

								<div className="activity-location">
									<IconMapPin />
									<span>{activity.location}</span>
								</div>

								<div className="activity-footer">
									<div className="organizer">
										<div className="organizer-avatar">
											<span>TT</span>
										</div>
										<span>{activity.organizer}</span>
									</div>
									<div className="area">{activity.area}</div>
								</div>
							</div>

							<div className="activity-image">
								<div className="image-placeholder" style={{ backgroundColor: '#E5E7EB' }}>
									<span style={{ color: '#9CA3AF', fontSize: '12px' }}>图片</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}