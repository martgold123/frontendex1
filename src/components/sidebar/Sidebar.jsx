import "./Sidebar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="LoaiBieuDo">Loại Biểu Đồ</span>
      <div className="sidebarButtonGroup">
        <Link to="/columnChart" className="link">
          <div className="columnChart">
            <span className="CharTittle">Cột</span>
            <NotificationsNone />
          </div>
        </Link>

        <Link to="/LineChart" className="link">
          <div className="LineChart">
            <span className="CharTittle">Đường</span>
            <NotificationsNone />
          </div>
        </Link>

        <Link to="/CircleChart" className="link">
        <div className="CircleChart">
          <span className="CharTittle">Hình tròn</span>
          <NotificationsNone />
        </div>
        </Link>
      </div>

      <div className="sidebarWrapper">
        <div className="SoSanhTheo">
          <label>So sánh theo</label>
          <select name="optionBy" id="optionBy" className="selectColor">
            <option value="ThoiGian">Thời gian</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="Cap">
          <label>Cấp</label>
          <select name="levelBy" id="levelBy" className="selectColor">
            <option value="location">Tỉnh/Thành phố</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="BuocThoiGian">
          <label>Bước thời gian</label>
          <select name="timeStep" id="timeStep" className="selectColor">
            <option value="month">Tháng</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="KhuVuc">
          <label>Khu vực</label>
          <select name="zone" id="zone" className="selectColor">
            <option value="City">Tỉnh/Thành phố</option>
          </select>

          <select name="zone" id="zone" className="selectColor">
            <option value="City">Quận/Huyện</option>
          </select>

          <select name="zone" id="zone" className="selectColor">
            <option value="City">Phường/Xã</option>
          </select>
        </div>
        <div className="DuLieu">
          <label>Dữ liệu</label>
          <select name="zone" id="zone" className="selectColor">
            <option value="Department">Giao thông</option>
          </select>
        </div>
        <div className="KhoangThoiGianBaoCao">Khoảng thời gian báo cáo</div>
        <div className="SuKien">Sự kiện</div>
      </div>
    </div>
  );
}
