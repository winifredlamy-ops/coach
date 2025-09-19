import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TimeSlotSetting.css'

const Svg: React.FC<{ path: string; className?: string }> = ({ path, className }) => (
	<svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d={path} />
	</svg>
)

const IconArrowLeft: React.FC = () => <Svg path="M19 12H5 M12 19l-7-7 7-7" />
const IconClock: React.FC = () => <Svg path="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-6V7h2v4h4Z" />

export const TimeSlotSetting: React.FC = () => {
	const navigate = useNavigate()
	const [startTime, setStartTime] = useState('4:36 PM')
	const [endTime, setEndTime] = useState('4:36 PM')

	const handleSave = () => {
		console.log('保存时间段:', { startTime, endTime })
	}

	const formatTimeDisplay = (time: string) => {
		return time
	}

	return (
		<div className="page">
			<div className="time-slot-header">
				<button className="back-button" onClick={() => navigate('/profile')}>
					<IconArrowLeft />
				</button>
				<h1 className="page-title">设置空闲时间段</h1>
			</div>

			<div className="time-slot-content">
				<div className="time-input-section">
					<div className="time-input-group">
						<label className="time-label">开始时间</label>
						<div className="time-input-wrapper">
							<input
								type="time"
								value="16:36"
								onChange={(e) => {
									const time = e.target.value
									const [hours, minutes] = time.split(':')
									const hour12 = parseInt(hours) > 12 ? parseInt(hours) - 12 : parseInt(hours)
									const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM'
									setStartTime(`${hour12}:${minutes} ${ampm}`)
								}}
								className="time-input"
							/>
							<div className="time-display">
								{formatTimeDisplay(startTime)}
							</div>
							<div className="time-icon">
								<IconClock />
							</div>
						</div>
					</div>

					<div className="time-input-group">
						<label className="time-label">结束时间</label>
						<div className="time-input-wrapper">
							<input
								type="time"
								value="16:36"
								onChange={(e) => {
									const time = e.target.value
									const [hours, minutes] = time.split(':')
									const hour12 = parseInt(hours) > 12 ? parseInt(hours) - 12 : parseInt(hours)
									const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM'
									setEndTime(`${hour12}:${minutes} ${ampm}`)
								}}
								className="time-input"
							/>
							<div className="time-display">
								{formatTimeDisplay(endTime)}
							</div>
							<div className="time-icon">
								<IconClock />
							</div>
						</div>
					</div>
				</div>

				<div className="save-section">
					<button className="save-button" onClick={handleSave}>
						保存
					</button>
				</div>
			</div>
		</div>
	)
}