/**
 * Hora local. Preenche cada [data-hora-fuso] com a hora do fuso indicado
 * e atualiza na virada de cada minuto. Sem JavaScript, fica só o nome do fuso.
 */
export function iniciarHoraLocal(): void {
	const relogios = document.querySelectorAll<HTMLTimeElement>("time[data-hora-fuso]");
	if (relogios.length === 0) return;

	const atualizar = () => {
		for (const relogio of relogios) {
			const fuso = relogio.dataset.horaFuso ?? "UTC";
			const hora = new Intl.DateTimeFormat("pt-BR", {
				hour: "2-digit",
				minute: "2-digit",
				timeZone: fuso,
			}).format(new Date());
			relogio.textContent = hora;
			relogio.dateTime = hora;
			relogio.hidden = false;
		}
		// Próxima atualização na virada do minuto.
		window.setTimeout(atualizar, 60_000 - (Date.now() % 60_000));
	};

	atualizar();
}
