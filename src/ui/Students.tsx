import React, { useState } from 'react'
import './Students.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconSearch: React.FC = () => <Svg path="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35" />
const IconPhone: React.FC = () => <Svg path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
const IconMail: React.FC = () => <Svg path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
const IconCalendar: React.FC = () => <Svg path="M3 4h18v18H3z M3 10h18 M9 2v4 M15 2v4" />
const IconTrendingUp: React.FC = () => <Svg path="M23 6l-9.5 9.5-5-5L1 18" />

interface Student {
	id: number
	name: string
	avatar?: string
	phone: string
	email?: string
	joinDate: string
	totalClasses: number
	completedClasses: number
	lastClass?: string
	level: '初级' | '中级' | '高级'
	status: 'active' | 'inactive'
	notes?: string
}

const students: Student[] = [
	{
		id: 1,
		name: '李小明',
		phone: '13800138001',
		email: 'lixiaoming@example.com',
		joinDate: '2024-08-01',
		totalClasses: 12,
		completedClasses: 8,
		lastClass: '2024-09-14',
		level: '初级',
		status: 'active'
	},
	{
		id: 2,
		name: '王美丽',
		phone: '13800138002',
		email: 'wangmeili@example.com',
		joinDate: '2024-07-15',
		totalClasses: 20,
		completedClasses: 15,
		lastClass: '2024-09-15',
		level: '中级',
		status: 'active'
	},
	{
		id: 3,
		name: '张小华',
		phone: '13800138003',
		joinDate: '2024-06-10',
		totalClasses: 30,
		completedClasses: 28,
		lastClass: '2024-09-13',
		level: '高级',
		status: 'active'
	},
	{
		id: 4,
		name: '陈大力',
		phone: '13800138004',
		email: 'chendali@example.com',
		joinDate: '2024-05-20',
		totalClasses: 5,
		completedClasses: 3,
		lastClass: '2024-08-30',
		level: '初级',
		status: 'inactive',
		notes: '最近两周未上课'
	},
	{
		id: 5,
		name: '赵小红',
		phone: '13800138005',
		joinDate: '2024-09-01',
		totalClasses: 4,
		completedClasses: 2,
		lastClass: '2024-09-12',
		level: '初级',
		status: 'active'
	}
]

export const Students: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

	const filteredStudents = students.filter(student => {
		const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.phone.includes(searchTerm)
		const matchesFilter = filter === 'all' || student.status === filter
		return matchesSearch && matchesFilter
	})

	const getLevelColor = (level: string) => {
		switch (level) {
			case '初级': return 'var(--warning)'
			case '中级': return 'var(--primary)'
			case '高级': return 'var(--secondary)'
			default: return 'var(--muted)'
		}
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'active': return 'var(--success)'
			case 'inactive': return 'var(--muted)'
			default: return 'var(--muted)'
		}
	}

	const getStatusText = (status: string) => {
		switch (status) {
			case 'active': return '活跃'
			case 'inactive': return '不活跃'
			default: return status
		}
	}

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr)
		return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
	}

	const getProgress = (completed: number, total: number) => {
		return total > 0 ? Math.round((completed / total) * 100) : 0
	}

	return (
		<div className="page">
			<h1 className="page-title">学员管理</h1>

			<div className="search-bar">
				<div className="search-input">
					<IconSearch />
					<input
						type="text"
						placeholder="搜索学员姓名或手机号"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>

			<div className="filter-tabs">
				<button
					className={filter === 'all' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('all')}
				>
					全部 ({students.length})
				</button>
				<button
					className={filter === 'active' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('active')}
				>
					活跃 ({students.filter(s => s.status === 'active').length})
				</button>
				<button
					className={filter === 'inactive' ? 'filter-tab active' : 'filter-tab'}
					onClick={() => setFilter('inactive')}
				>
					不活跃 ({students.filter(s => s.status === 'inactive').length})
				</button>
			</div>

			<div className="students-list">
				{filteredStudents.map((student) => (
					<div key={student.id} className="student-card card">
						<div className="student-header">
							<div className="student-info">
								<div className="student-name">
									<h3>{student.name}</h3>
									<div className="student-badges">
										<span
											className="student-level"
											style={{ background: getLevelColor(student.level) + '20', color: getLevelColor(student.level) }}
										>
											{student.level}
										</span>
										<span
											className="student-status"
											style={{ background: getStatusColor(student.status) + '20', color: getStatusColor(student.status) }}
										>
											{getStatusText(student.status)}
										</span>
									</div>
								</div>
							</div>
							<div className="student-progress">
								<div className="progress-text">
									{student.completedClasses}/{student.totalClasses}
								</div>
								<div className="progress-bar">
									<div
										className="progress-fill"
										style={{ width: `${getProgress(student.completedClasses, student.totalClasses)}%` }}
									/>
								</div>
							</div>
						</div>

						<div className="student-contacts">
							<div className="contact-item">
								<IconPhone />
								<span>{student.phone}</span>
							</div>
							{student.email && (
								<div className="contact-item">
									<IconMail />
									<span>{student.email}</span>
								</div>
							)}
						</div>

						<div className="student-details">
							<div className="detail-item">
								<IconCalendar />
								<span>加入：{formatDate(student.joinDate)}</span>
							</div>
							{student.lastClass && (
								<div className="detail-item">
									<IconTrendingUp />
									<span>最近：{formatDate(student.lastClass)}</span>
								</div>
							)}
						</div>

						{student.notes && (
							<div className="student-notes">
								<span className="notes-label">备注：</span>
								{student.notes}
							</div>
						)}
					</div>
				))}
			</div>

			{filteredStudents.length === 0 && (
				<div className="empty-state">
					<p>
						{searchTerm ? '未找到匹配的学员' : '暂无学员'}
					</p>
				</div>
			)}
		</div>
	)
}