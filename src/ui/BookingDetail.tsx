import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './BookingDetail.css'

// Import booking data to access course names
const bookings = [
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
	},
	{
		id: 6,
		courseName: '1对2导师体验课-室内60分钟',
		studentName: '陈达文',
		date: '2024-09-18',
		time: '16:00-17:00',
		location: '3号场',
		storeName: 'TT网球（福田店）',
		storeAddress: '海淀区中关村大街32号',
		status: 'updated',
		price: 450,
		note: '需要重点练习反手技术'
	},
	{
		id: 7,
		courseName: '1对1私教体验课-室内60分钟',
		studentName: '张三',
		date: '2024-09-12',
		time: '10:00-11:00',
		location: '1号场',
		storeName: 'TT网球（福田店）',
		storeAddress: '海淀区中关村大街32号',
		status: 'ended',
		price: 500,
		rating: {
			overall: 5,
			pace: 4,
			teachingStyle: 5,
			patience: 5
		}
	}
]

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
	const [showRejectModal, setShowRejectModal] = useState(false)
	const [rejectReason, setRejectReason] = useState('')

	// Find the booking by ID
	const booking = bookings.find(b => b.id === parseInt(id || '0'))
	const courseName = booking?.courseName || '周末单次小团课体验-4人班/120分钟'

	const handleConfirm = () => {
		console.log('确认预约')
		navigate('/bookings')
	}

	const handleCancel = () => {
		if (booking?.id === 6) {
			setShowRejectModal(true)
		} else {
			console.log('取消预约')
			navigate('/bookings')
		}
	}

	const handleReject = () => {
		console.log('拒绝更改，原因：', rejectReason || '无')
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
				<h2>{courseName}</h2>
				<div className="booking-details">
					<div className="detail-row">
						<span className="label">学员姓名:</span>
						<span className="value">{booking?.studentName || '李小明'}</span>
					</div>
					<div className="detail-row">
						<span className="label">联系电话:</span>
						<span className="value">138****8001</span>
					</div>
					<div className="detail-row">
						<span className="label" style={booking?.status === 'updated' ? { color: '#007AFF', fontWeight: 'bold' } : {}}>上课时间:</span>
						<span className="value" style={booking?.status === 'updated' ? { color: '#007AFF', fontWeight: 'bold' } : {}}>{booking?.date || '2024-09-16'} {booking?.time || '09:00-10:30'}</span>
					</div>
					<div className="detail-row">
						<span className="label">上课地点:</span>
						<span className="value">{booking?.storeName || 'TT网球（南山店）'}{booking?.location || '1号场地'}</span>
					</div>
					<div className="detail-row">
						<span className="label">课时价格:</span>
						<span className="value price">¥{booking?.price || 120}</span>
					</div>
				</div>

				{booking?.note && (
					<div className="note-section">
						<h3>学员备注</h3>
						<p>{booking.note}</p>
					</div>
				)}
			</div>

			{booking?.status === 'ended' ? (
				<div className="rating-section" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
					<h3 style={{ marginBottom: '20px', color: '#333', fontSize: '18px' }}>学员评价</h3>

					{/* 总评分 */}
					<div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>总体评价</span>
							<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
								<div style={{ display: 'flex', gap: '2px' }}>
									{[1, 2, 3, 4, 5].map((star) => (
										<span
											key={star}
											style={{
												fontSize: '18px',
												color: star <= (booking?.rating?.overall || 0) ? '#FFD700' : '#E0E0E0'
											}}
										>
											★
										</span>
									))}
								</div>
								<span style={{ color: '#666', fontSize: '14px' }}>
									{booking?.rating?.overall || 0}/5分
								</span>
							</div>
						</div>
					</div>

					{/* 详细评分 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<span style={{ fontSize: '14px', color: '#555' }}>上课节奏</span>
							<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
								<div style={{ display: 'flex', gap: '2px' }}>
									{[1, 2, 3, 4, 5].map((star) => (
										<span
											key={star}
											style={{
												fontSize: '16px',
												color: star <= (booking?.rating?.pace || 0) ? '#FFD700' : '#E0E0E0'
											}}
										>
											★
										</span>
									))}
								</div>
								<span style={{ color: '#666', fontSize: '12px', minWidth: '35px' }}>
									{booking?.rating?.pace || 0}/5
								</span>
							</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<span style={{ fontSize: '14px', color: '#555' }}>教学风格</span>
							<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
								<div style={{ display: 'flex', gap: '2px' }}>
									{[1, 2, 3, 4, 5].map((star) => (
										<span
											key={star}
											style={{
												fontSize: '16px',
												color: star <= (booking?.rating?.teachingStyle || 0) ? '#FFD700' : '#E0E0E0'
											}}
										>
											★
										</span>
									))}
								</div>
								<span style={{ color: '#666', fontSize: '12px', minWidth: '35px' }}>
									{booking?.rating?.teachingStyle || 0}/5
								</span>
							</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<span style={{ fontSize: '14px', color: '#555' }}>耐心程度</span>
							<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
								<div style={{ display: 'flex', gap: '2px' }}>
									{[1, 2, 3, 4, 5].map((star) => (
										<span
											key={star}
											style={{
												fontSize: '16px',
												color: star <= (booking?.rating?.patience || 0) ? '#FFD700' : '#E0E0E0'
											}}
										>
											★
										</span>
									))}
								</div>
								<span style={{ color: '#666', fontSize: '12px', minWidth: '35px' }}>
									{booking?.rating?.patience || 0}/5
								</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="actions">
					{booking?.id === 2 ? (
						<>
							<button
								className="btn btn-primary confirm-btn"
								onClick={handleConfirm}
							>
								<IconCheck />
								确认接受
							</button>
							<button
								className="btn btn-outline cancel-btn"
								onClick={handleCancel}
							>
								<IconX />
								拒绝接受
							</button>
						</>
					) : booking?.id === 5 ? (
						<div></div>
					) : booking?.id === 6 ? (
						<>
							<button
								className="btn btn-primary confirm-btn"
								onClick={handleConfirm}
							>
								<IconCheck />
								确认更改
							</button>
							<button
								className="btn btn-outline cancel-btn"
								onClick={handleCancel}
							>
								<IconX />
								拒绝更改
							</button>
						</>
					) : (
						<>
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
						</>
					)}
				</div>
			)}


			{showRejectModal && (
				<div className="modal-overlay" onClick={() => setShowRejectModal(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<textarea
							className="reject-reason-input"
							placeholder="请输入拒绝更改的原因（选填）..."
							value={rejectReason}
							onChange={(e) => setRejectReason(e.target.value)}
						/>
						<div className="modal-actions">
							<button
								className="btn btn-outline"
								onClick={() => setShowRejectModal(false)}
							>
								取消
							</button>
							<button
								className="btn btn-primary"
								onClick={handleReject}
							>
								确认拒绝
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}