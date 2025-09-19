import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Bookings.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconCalendar: React.FC = () => <Svg path="M3 4h18v18H3z M3 10h18 M9 2v4 M15 2v4" />
const IconClock: React.FC = () => <Svg path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-6V8a1 1 0 0 1 2 0v3h4a1 1 0 0 1 0 2Z" />
const IconUser: React.FC = () => <Svg path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
const IconMapPin: React.FC = () => <Svg path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
const IconStore: React.FC = () => <Svg path="M3 21h18v-9l-9-7-9 7v9zM9 21v-6h6v6" />

interface Booking {
	id: number
	courseName: string
	studentName: string
	studentAvatar?: string
	date: string
	time: string
	location: string
	storeName: string
	storeAddress: string
	status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
	price: number
	note?: string
}

const bookings: Booking[] = [
	{
		id: 1,
		courseName: '周末单次小团课体验-4人班/120分钟',
		studentName: '李小明',
		date: '2024-09-16',
		time: '14:00-16:00',
		location: '1号场',
		storeName: 'TT网球（南山店）',
		storeAddress: '朝阳区望京街道15号',
		status: 'confirmed',
		price: 120,
		note: '第一次上课，希望多关照'
	},
	{
		id: 2,
		courseName: '1对2私教体验课-室内60分钟',
		studentName: '王美丽',
		date: '2024-09-16',
		time: '10:00-11:00',
		location: '2号场',
		storeName: 'TT网球（福田店）',
		storeAddress: '海淀区中关村大街32号',
		status: 'pending',
		price: 300,
		note: '学过正反手但不够熟练'
	},
	{
		id: 5,
		courseName: '周末单次小团课体验-4人班/120分钟',
		studentName: '赵小红',
		date: '2024-09-14',
		time: '14:00-16:00',
		location: '2号场',
		storeName: 'TT网球（南山店）',
		storeAddress: '朝阳区望京街道15号',
		status: 'cancelled',
		price: 120,
		note: '临时有事取消'
	}
]

export const Bookings: React.FC = () => {
	const navigate = useNavigate()
	const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all')

	const filteredBookings = filter === 'all'
		? bookings
		: bookings.filter(booking => booking.status === filter)

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'pending': return 'var(--warning)'
			case 'confirmed': return 'var(--primary)'
			case 'completed': return 'var(--success)'
			case 'cancelled': return 'var(--danger)'
			default: return 'var(--muted)'
		}
	}

	const getStatusText = (status: string) => {
		switch (status) {
			case 'pending': return '待确认'
			case 'confirmed': return '已确认'
			case 'completed': return '已完成'
			case 'cancelled': return '已取消'
			default: return status
		}
	}

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr)
		const today = new Date()
		const tomorrow = new Date(today)
		tomorrow.setDate(tomorrow.getDate() + 1)

		if (date.toDateString() === today.toDateString()) {
			return '今天'
		} else if (date.toDateString() === tomorrow.toDateString()) {
			return '明天'
		} else {
			return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
		}
	}

	return (
		<div className="page">
			<div className="bookings-header">
				<h1 className="page-title">我的课程</h1>
			</div>

			<div className="filter-tabs">
				<button
					className={filter === 'all' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('all')}
				>
					全部 ({bookings.length})
				</button>
				<button
					className={filter === 'pending' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('pending')}
				>
					待确认 ({bookings.filter(b => b.status === 'pending').length})
				</button>
				<button
					className={filter === 'confirmed' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('confirmed')}
				>
					已确认 ({bookings.filter(b => b.status === 'confirmed').length})
				</button>
				<button
					className={filter === 'completed' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('completed')}
				>
					已完成 ({bookings.filter(b => b.status === 'completed').length})
				</button>
			</div>

			<div className="bookings-list">
				{filteredBookings.map((booking) => (
					<div
						key={booking.id}
						className="booking-card card"
						onClick={() => navigate(`/bookings/${booking.id}`)}
					>
						<div className="booking-main">
							<div className="booking-header">
								<div className="booking-course">
									<h3>{booking.courseName}</h3>
								</div>
								<span
									className="booking-status"
									style={{
										background: getStatusColor(booking.status) + '20',
										color: getStatusColor(booking.status),
										border: `1px solid ${getStatusColor(booking.status)}`
									}}
								>
									{getStatusText(booking.status)}
								</span>
							</div>

							<div className="booking-student">
								<IconUser />
								<span>{booking.studentName}</span>
							</div>

							<div className="booking-details">
								<div className="booking-detail">
									<IconCalendar />
									<span>{formatDate(booking.date)}</span>
								</div>
								<div className="booking-detail">
									<IconClock />
									<span>{booking.time}</span>
								</div>
								<div className="booking-detail">
									<IconStore />
									<span>{booking.storeName}</span>
								</div>
								<div className="booking-detail">
									<IconMapPin />
									<span>{booking.location}</span>
								</div>
							</div>

							{booking.note && (
								<div className="booking-note">
									<span className="note-label">备注：</span>
									{booking.note}
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			{filteredBookings.length === 0 && (
				<div className="empty-state">
					<p>暂无预约记录</p>
				</div>
			)}
		</div>
	)
}