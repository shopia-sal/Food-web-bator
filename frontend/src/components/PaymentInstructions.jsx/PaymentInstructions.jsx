import { useLocation, Link } from "react-router-dom"

const PaymentInstructions = () => {
  const location = useLocation()
  const { order } = location.state || {}

  if (!order) return <p>Order tidak ditemukan.</p>

  // Format daftar item
  const itemsText = order.items.map((i) => `- ${i.item.name} x${i.quantity}`).join("\n")

  // Pesan WA otomatis
  const whatsappMessage = `Halo Admin, saya ${order.firstName} ${order.lastName}.\nSaya sudah melakukan pembayaran dengan metode ${order.paymentMethod}.\nTotal: Rp${order.total}\nPesanan:\n${itemsText}\nMohon konfirmasi. Terima kasih!`
  const whatsappLink = `https://wa.me/082274549041?text=${encodeURIComponent(whatsappMessage)}`

  // Nomor e-wallet
  const walletNumbers = {
    gopay: "0812-3456-7890",
    ovo: "0813-9876-5432",
    dana: "0814-1122-3344",
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-6">Instruksi Pembayaran</h1>

        <p className="mb-4 text-white/80">
          Terima kasih atas pesanan Anda,{" "}
          <span className="font-medium text-white">
            {order.firstName} {order.lastName}
          </span>
          !
        </p>

        <p className="mb-2 text-sm md:text-base text-white/90">
          Total yang harus dibayar:
          <span className="ml-1 text-amber-400 font-bold"> Rp{order.total}</span>
        </p>

        <p className="mb-4 text-sm md:text-base text-white/90">
          Metode Pembayaran:
          <span className="ml-2 inline-flex items-center rounded-md bg-white/10 px-2 py-0.5 capitalize text-white">
            {order.paymentMethod}
          </span>
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#4b3b3b]/80 text-white p-6 md:p-8 shadow-lg space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">Pesanan Anda:</h2>

          <ul className="list-disc list-inside text-sm md:text-base leading-relaxed marker:text-amber-400/80">
            {order.items.map((i) => (
              <li key={i._id}>
                {i.item.name} x{i.quantity}
              </li>
            ))}
          </ul>

          {["gopay", "ovo", "dana"].includes(order.paymentMethod) && (
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <h2 className="text-base md:text-lg font-medium mb-1">Silakan transfer ke:</h2>
              <p className="text-sm md:text-base">
                {order.paymentMethod.charAt(0).toUpperCase() + order.paymentMethod.slice(1)}:
                <span className="font-semibold tracking-wide"> {walletNumbers[order.paymentMethod]}</span>
              </p>
            </div>
          )}

          <h2 className="text-lg md:text-xl font-semibold mt-2">Instruksi:</h2>
          <p className="text-white/80">
            Silakan klik tombol di bawah untuk mengirim pesan otomatis ke admin melalui WhatsApp.
          </p>
          <p className="text-white/80">
            Setelah itu, kirim <strong>foto bukti transfer</strong> melalui chat WhatsApp.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-500 px-4 py-2 font-bold text-black hover:bg-green-600 transition-colors"
          >
            Kirim Bukti Pembayaran ke WhatsApp
          </a>
        </div>

        <Link
          to="/myorder"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-400 transition-colors"
        >
          Lihat Pesanan Saya
        </Link>
      </div>
    </>
  )
}

export default PaymentInstructions
