import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './BookingDetail.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconArrowLeft: React.FC = () => <Svg path="M19 12H5 M12 19l-7-7 7-7" />
const IconCheck: React.FC = () => <Svg path="M20 6L9 17l-5-5" />
const IconX: React.FC = () => <Svg path="M18 6L6 18 M6 6l12 12" />

export const BookingDetail: React.FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const handleConfirm = () => {
		console.log('确认预约')
		navigate('/bookings')
	}

	const handleCancel = () => {
		console.log('取消预约')
		navigate('/bookings')
	}

	return (
		<div className="page">
			<div className="detail-header">
				<button
					className="back-btn"
					onClick={() => navigate('/bookings')}
				>
					<IconArrowLeft />
				</button>
				<h1 className="page-title">预约详情</h1>
			</div>

			<div className="booking-info card">
				<h2>周末单次小团课体验-4人班/120分钟</h2>
				<div className="booking-details">
					<div className="detail-row">
						<span className="label">学员姓名:</span>
						<span className="value">李小明</span>
					</div>
					<div className="detail-row">
						<span className="label">联系电话:</span>
						<span className="value">13800138001</span>
					</div>
					<div className="detail-row">
						<span className="label">上课时间:</span>
						<span className="value">2024-09-16 09:00-10:30</span>
					</div>
					<div className="detail-row">
						<span className="label">上课地点:</span>
						<span className="value">TT网球（南山店）1号场地</span>
					</div>
					<div className="detail-row">
						<span className="label">课程价格:</span>
						<span className="value price">¥120</span>
					</div>
				</div>

				<div className="note-section">
					<h3>学员备注</h3>
					<p>第一次上课，希望多关照</p>
				</div>
			</div>

			<div className="actions">
				<button
					className="btn btn-primary confirm-btn"
					onClick={handleConfirm}
				>
					<IconCheck />
					完成上课
				</button>
				<button
					className="btn btn-outline cancel-btn"
					onClick={handleCancel}
				>
					<IconX />
					取消订单
				</button>
			</div>

			<div className="placeholder">
				<p className="muted">预约ID: {id}</p>
				<p className="muted">其他功能开发中...</p>
			</div>
		</div>
	)
}