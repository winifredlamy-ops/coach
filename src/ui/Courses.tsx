import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Courses.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconPlus: React.FC = () => <Svg path="M12 5v14 M5 12h14" />
const IconClock: React.FC = () => <Svg path="M12 6v6l4 2" />
const IconUsers: React.FC = () => <Svg path="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
const IconMapPin: React.FC = () => <Svg path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />

interface Course {
	id: number
	name: string
	type: '小团课' | '私教课' | '体验课'
	duration: number
	maxStudents: number
	currentStudents: number
	price: number
	location: string
	status: 'active' | 'draft' | 'paused'
	description: string
}

const courses: Course[] = [
	{
		id: 1,
		name: '网球基础班',
		type: '小团课',
		duration: 90,
		maxStudents: 6,
		currentStudents: 4,
		price: 120,
		location: '1号场地',
		status: 'active',
		description: '适合零基础学员，学习基本技巧'
	},
	{
		id: 2,
		name: '青少年提高班',
		type: '小团课',
		duration: 90,
		maxStudents: 8,
		currentStudents: 6,
		price: 150,
		location: '2号场地',
		status: 'active',
		description: '8-16岁青少年技术提升'
	},
	{
		id: 3,
		name: '成人私教课',
		type: '私教课',
		duration: 60,
		maxStudents: 1,
		currentStudents: 1,
		price: 300,
		location: '3号场地',
		status: 'active',
		description: '一对一个性化指导'
	},
	{
		id: 4,
		name: '网球体验课',
		type: '体验课',
		duration: 60,
		maxStudents: 4,
		currentStudents: 2,
		price: 68,
		location: '1号场地',
		status: 'draft',
		description: '初次体验网球运动的乐趣'
	}
]

export const Courses: React.FC = () => {
	const navigate = useNavigate()
	const [filter, setFilter] = useState<'all' | 'active' | 'draft' | 'paused'>('all')

	const filteredCourses = filter === 'all'
		? courses
		: courses.filter(course => course.status === filter)

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'active': return 'var(--success)'
			case 'draft': return 'var(--warning)'
			case 'paused': return 'var(--muted)'
			default: return 'var(--muted)'
		}
	}

	const getStatusText = (status: string) => {
		switch (status) {
			case 'active': return '进行中'
			case 'draft': return '草稿'
			case 'paused': return '暂停'
			default: return status
		}
	}

	const getTypeColor = (type: string) => {
		switch (type) {
			case '小团课': return 'var(--primary)'
			case '私教课': return 'var(--secondary)'
			case '体验课': return 'var(--warning)'
			default: return 'var(--muted)'
		}
	}

	return (
		<div className="page">
			<div className="courses-header">
				<h1 className="page-title">课程管理</h1>
				<button
					className="btn btn-primary"
					onClick={() => navigate('/courses/create')}
				>
					<IconPlus />
					新建课程
				</button>
			</div>

			<div className="filter-tabs">
				<button
					className={filter === 'all' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('all')}
				>
					全部 ({courses.length})
				</button>
				<button
					className={filter === 'active' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('active')}
				>
					进行中 ({courses.filter(c => c.status === 'active').length})
				</button>
				<button
					className={filter === 'draft' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('draft')}
				>
					草稿 ({courses.filter(c => c.status === 'draft').length})
				</button>
			</div>

			<div className="courses-list">
				{filteredCourses.map((course) => (
					<div
						key={course.id}
						className="course-card card"
						onClick={() => navigate(`/courses/${course.id}`)}
					>
						<div className="course-header">
							<div className="course-title">
								<h3>{course.name}</h3>
								<div className="course-badges">
									<span
										className="course-type"
										style={{ background: getTypeColor(course.type) + '20', color: getTypeColor(course.type) }}
									>
										{course.type}
									</span>
									<span
										className="course-status"
										style={{ background: getStatusColor(course.status) + '20', color: getStatusColor(course.status) }}
									>
										{getStatusText(course.status)}
									</span>
								</div>
							</div>
							<div className="course-price">¥{course.price}</div>
						</div>

						<div className="course-description">
							{course.description}
						</div>

						<div className="course-details">
							<div className="course-detail">
								<IconClock />
								<span>{course.duration}分钟</span>
							</div>
							<div className="course-detail">
								<IconUsers />
								<span>{course.currentStudents}/{course.maxStudents}人</span>
							</div>
							<div className="course-detail">
								<IconMapPin />
								<span>{course.location}</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{filteredCourses.length === 0 && (
				<div className="empty-state">
					<p>暂无课程</p>
					<button
						className="btn btn-primary"
						onClick={() => navigate('/courses/create')}
					>
						创建第一个课程
					</button>
				</div>
			)}
		</div>
	)
}