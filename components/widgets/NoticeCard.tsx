export default function NoticeCard() {
  return (
    <div className="widget-card p-4">
      <h3 className="text-[13px] font-medium text-gray-500 mb-2.5">最新公告</h3>
      <div className="flex items-start gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-flesh-light to-flesh-soft flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 1024 1024" fill="#cc6b8a">
            <path d="M63.520197 64.485687 63.520197 847.402933l727.208457 0L790.728654 64.485687 63.520197 64.485687zM735.893768 792.514835 117.451504 792.514835 117.451504 118.357642 735.893768 118.357642 735.893768 792.514835z" />
            <path d="M192.604134 400.401296l458.300984 0 0 55.113225-458.300984 0 0-55.113225Z" />
            <path d="M192.604134 512.239454l458.300984 0 0 55.113225-458.300984 0 0-55.113225Z" />
            <path d="M192.604134 624.13287l458.300984 0 0 55.112202-458.300984 0 0-55.112202Z" />
            <path d="M192.604134 288.11493l229.147934 0 0 55.113225-229.147934 0 0-55.113225Z" />
            <path d="M958.486402 959.245184 371.311259 959.245184 371.311259 905.370159 904.617517 905.370159 904.617517 230.196823 848.166831 230.196823 848.166831 176.322821 958.486402 176.322821Z" />
          </svg>
        </div>
        <div className="min-w-0">
          <h4 className="text-[13px] font-medium text-gray-700">公告</h4>
          <p className="text-[11px] text-gray-400 mt-0.5">
            该用户正在搭建中
          </p>
          <span className="text-[10px] text-gray-300 mt-1 block">2026/3/4</span>
        </div>
      </div>
    </div>
  );
}
