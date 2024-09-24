class Cxmsg {
  static divmsg = null;
  static width = "92%";
  static variant = "ok"; // confirm
  static cancel = "Cancelar";
  static confirm = "Confirmar";
  static cancelColor = "#eee";
  static okColor = "#000";
  static okBg = "#f00";
  static confirmColor = "#eee";
  static confirmBg = "green";
  static cancelBg = "#eee";
  static titleBg = "#eee";
  static titleColor = "#000";
  static bodyBg = "#fff";
  static bodyColor = "#000";
  static actionBg = "#fff";
  static action = null;

  /**
   * Configure the component caixa
   * @param {object} config - Objecto das configurações
   * @param {string} config.titulo - O título da caixa
   * @param {number} config.largura - A largura da caixa
   * @param {number} config.altura - A altura da caixa
   */
  static config(config) {
    // Mescla as configurações personalizadas com as padrão
    Object.assign(this, config);
  }

  /**
   * Torna visivel o caixa
   @param {string} title title of moda
   @param {string} texto text of body
   */
  static mostrar = (title, texto) => {
    this.titulo = title;
    this.texto = texto;
    this.body = document.body;

    this.divmsg = document.createElement("div");
    this.divmsg.setAttribute("id", "divmsg");
    this.divmsg.setAttribute(
      "style",
      `
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 5;
    `,
    );

    this.body.prepend(this.divmsg);

    const caixa = document.createElement("div");
    caixa.setAttribute("id", "caixa");
    caixa.setAttribute(
      "style",
      `
      display: flex;
      width: ${this.width};
      max-width: 500px;
      min-height: 200px;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      border-radius: 7px;
      background: #fff;
    `,
    );

    this.divmsg.appendChild(caixa);

    const titulo = document.createElement("div");
    titulo.setAttribute(
      "style",
      `
      background: ${this.titleBg};
      padding: 15px; 
      font-size: 18px;
      color: ${this.titleColor};
      border-radius: 7px 7px 0px 0px;
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      font-weight: bold;
      text-align: center;
      border-bottom: 1px solid #ddd;
    `,
    );
    titulo.innerHTML = this.titulo;

    caixa.appendChild(titulo);

    const corpo = document.createElement("div");
    corpo.setAttribute(
      "style",
      `
        background: ${this.bodyBg};
        padding: 15px;
        font-size: 16px;
        color: ${this.bodyColor};
        width: 100%;
        box-sizing: border-box;
        padding: 25px 14px;
        text-align: center;
        min-height: 100px;
        `,
    );

    corpo.innerHTML = this.texto;
    caixa.appendChild(corpo);

    const rodape = document.createElement("div");
    rodape.setAttribute(
      "style",
      `
      background: ${this.actionBg};
      font-size: 18px;
      border-radius: 0px 0px 7px 7px;
      max-width: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-weight: bold;
      border-top: 0.5px solid #ddd;
        ` +
        (this.variant === "confirm"
          ? `justify-content: flex-end; 
         gap: 20px;
         padding: 7px 0px;
         `
          : ""),
    );

    caixa.append(rodape);

    if (this.variant === "ok") {
      const btn_ok = document.createElement("button");

      btn_ok.setAttribute(
        "style",
        `
      background: ${this.okBg};
      font-size: 16px;
      color: ${this.okColor};
      border-radius: 0px 0px 7px 7px;
      cursor: pointer;
      height: 100%;
      width: 100%;
      padding: 15px; 
      border: none;
      box-sizing: border-box;
      font-weight: bold;
      text-align: center;
      
   `,
      );

      btn_ok.innerHTML = "Ok";
      btn_ok.addEventListener("click", () => {
        this.ocultar();
      });
      rodape.appendChild(btn_ok);
    } else if (this.variant === "confirm") {
      const cancelar = document.createElement("button");
      cancelar.setAttribute(
        "style",
        `
        background: ${this.cancelBg};
        font-size: 16px;
        color: ${this.cancelColor};
        border-radius: 7px;
        cursor: pointer;
        padding: 13px 15px; 
        border: none;
        box-sizing: border-box;
        font-weight: 500;
        text-align: center;
            
         `,
      );
      cancelar.innerHTML = this.cancel;
      cancelar.addEventListener("click", () => {
        this.ocultar();
      });

      const confirmar = document.createElement("button");
      confirmar.setAttribute(
        "style",
        `
        background: ${this.confirmBg};
        font-size: 16px;
        color: ${this.confirmColor};
        border-radius: 7px;
        cursor: pointer;
        padding: 13px 15px;
        border: none;
        box-sizing: border-box;
        font-weight: 500;
        text-align: center;
        margin-right: 15px;
            
         `,
      );

      confirmar.addEventListener("click", () => {
        this.action();
        this.ocultar();
      });

      confirmar.innerHTML = this.confirm;

      rodape.appendChild(cancelar);
      rodape.appendChild(confirmar);
    } else {
      console.error("Type invalid, select 'ok' or 'confirm'");
    }
  };

  static ocultar = () => {
    this.divmsg.remove();
    // this.divmsg.style.display = 'none'
  };
}

//export { Cxmsg };
