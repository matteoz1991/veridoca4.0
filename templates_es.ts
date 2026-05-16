import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_ES: DocumentTemplate[] = [
  // --- BIENES RAÍCES Y VIVIENDA ---
  {
    id: '1',
    title: 'Contrato de Subarriendo',
    description: 'Acuerdo seguro para subarrendar una propiedad residencial.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Nombre del Propietario', type: 'text', required: true, placeholder: 'Nombre Apellido' },
      { id: 'landlordSSN', label: 'ID/DNI del Propietario', type: 'text', required: true, placeholder: '12345678X' },
      { id: 'tenantName', label: 'Nombre del Inquilino', type: 'text', required: true, placeholder: 'Nombre Apellido' },
      { id: 'tenantSSN', label: 'ID/DNI del Inquilino', type: 'text', required: true, placeholder: '12345678X' },
      { id: 'address', label: 'Dirección de la Propiedad', type: 'text', required: true, placeholder: 'Calle, Código Postal, Ciudad' },
      { id: 'rent', label: 'Alquiler (por mes)', type: 'number', required: true, placeholder: 'ej. 800' },
      { id: 'deposit', label: 'Depósito', type: 'number', required: false, placeholder: 'ej. 800' },
      { id: 'startDate', label: 'Fecha de Mudanza', type: 'date', required: true },
      { id: 'endDate', label: 'Fecha de Salida', type: 'date', required: true },
      { id: 'included', label: 'Incluido en el Alquiler', type: 'textarea', required: false, placeholder: 'ej. Electricidad, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Aviso de Terminación de Contrato',
    description: 'Aviso formal de terminación de un contrato de arrendamiento.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Tu Nombre', type: 'text', required: true },
      { id: 'senderID', label: 'Tu ID/DNI', type: 'text', required: true },
      { id: 'receiverName', label: 'Nombre del Destinatario', type: 'text', required: true },
      { id: 'receiverID', label: 'ID/DNI del Destinatario', type: 'text', required: true },
      { id: 'address', label: 'Dirección de la Propiedad', type: 'text', required: true },
      { id: 'contractDate', label: 'Fecha Original del Contrato', type: 'date', required: false },
      { id: 'terminationDate', label: 'Fecha de Salida', type: 'date', required: true },
      { id: 'reason', label: 'Motivo (opcional)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Contrato de Arrendamiento Comercial',
    description: 'Contrato de alquiler de locales comerciales, oficinas o almacenes.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Arrendador (Empresa)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'NIF del Arrendador', type: 'text', required: true },
      { id: 'tenant', label: 'Arrendatario (Empresa)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'NIF del Arrendatario', type: 'text', required: true },
      { id: 'premises', label: 'Dirección del Local', type: 'text', required: true },
      { id: 'area', label: 'Área Total (m²)', type: 'number', required: true },
      { id: 'usage', label: 'Uso Previsto', type: 'text', required: true },
      { id: 'rent', label: 'Alquiler Anual (excl. IVA)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Contrato de Obra (Remodelación)',
    description: 'Acuerdo seguro entre un cliente y un contratista para trabajos de renovación.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Cliente', type: 'text', required: true },
      { id: 'clientSSN', label: 'DNI del Cliente', type: 'text', required: true },
      { id: 'contractor', label: 'Contratista', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'NIF del Contratista', type: 'text', required: true },
      { id: 'scope', label: 'Alcance del Trabajo', type: 'textarea', required: true, placeholder: 'Describe lo que se debe hacer...' },
      { id: 'priceType', label: 'Modelo de Precios', type: 'select', required: true, options: ['Precio Fijo', 'Tarifa por Hora', 'Presupuesto Estimado'] },
      { id: 'price', label: 'Precio / Tarifa por Hora', type: 'number', required: true },
      { id: 'deadline', label: 'Fecha Límite de Finalización', type: 'date', required: true },
    ]
  },

  // --- FAMILIA Y RELACIONES ---
  {
    id: '3',
    title: 'Acuerdo de Convivencia',
    description: 'Establece términos sobre bienes y propiedades compartidas.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Nombre de la Pareja 1', type: 'text', required: true },
      { id: 'partner1SSN', label: 'ID/DNI de la Pareja 1', type: 'text', required: true },
      { id: 'partner2Name', label: 'Nombre de la Pareja 2', type: 'text', required: true },
      { id: 'partner2SSN', label: 'ID/DNI de la Pareja 2', type: 'text', required: true },
      { id: 'address', label: 'Dirección Compartida', type: 'text', required: true },
      { id: 'agreementType', label: 'Tipo de Acuerdo', type: 'select', required: true, options: ['Excluir las leyes de convivencia general por completo', 'Se debe excluir propiedad específica'] },
    ]
  },
  {
    id: '16',
    title: 'Acuerdo Prenupcial',
    description: 'Decide qué propiedad debe considerarse bien privativo en un matrimonio.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Nombre del Cónyuge 1', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'ID/DNI del Cónyuge 1', type: 'text', required: true },
      { id: 'spouse2', label: 'Nombre del Cónyuge 2', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'ID/DNI del Cónyuge 2', type: 'text', required: true },
      { id: 'scope', label: 'Alcance del Acuerdo', type: 'select', required: true, options: ['Toda la propiedad debe ser privativa', 'La propiedad prematrimonial debe ser privativa', 'La propiedad específica debe ser privativa'] },
      { id: 'specifics', label: 'Especificaciones (si aplica)', type: 'textarea', required: false, placeholder: 'ej., La cabaña ubicada en...' },
    ]
  },
  {
    id: '5',
    title: 'Testamento',
    description: 'Asegura que tu patrimonio se distribuya de acuerdo con tus deseos.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Nombre del Testador', type: 'text', required: true },
      { id: 'testatorSSN', label: 'ID/DNI del Testador', type: 'text', required: true },
      { id: 'beneficiaries', label: '¿Quién heredará?', type: 'textarea', required: true, placeholder: 'Nombres de personas u organizaciones...' },
      { id: 'specificGifts', label: 'Regalos Específicos (opcional)', type: 'textarea', required: false, placeholder: 'ej. Mi reloj a Juan...' },
      { id: 'privateProperty', label: '¿Las herencias serán bienes privativos?', type: 'select', required: true, options: ['Sí', 'No'] },
    ]
  },
  {
    id: '6',
    title: 'Escritura de Donación',
    description: 'Un documento formal para transferir propiedades, como bienes raíces o dinero, como un regalo.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Nombre del Donante', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID/DNI del Donante', type: 'text', required: true },
      { id: 'receiverName', label: 'Nombre del Donatario', type: 'text', required: true },
      { id: 'receiverSSN', label: 'ID/DNI del Donatario', type: 'text', required: true },
      { id: 'description', label: '¿Qué se dona?', type: 'textarea', required: true, placeholder: 'ej. 10.000 en efectivo o Propiedad Inmobiliaria X...' },
      { id: 'conditions', label: 'Condiciones', type: 'textarea', required: false, placeholder: 'ej. Debe considerarse propiedad separada' },
    ]
  },
  {
    id: '17',
    title: 'Acuerdo de División de Bienes',
    description: 'Acuerdo para dividir la propiedad durante una separación o divorcio.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Nombre de la Parte 1', type: 'text', required: true },
      { id: 'party1SSN', label: 'ID/DNI de la Parte 1', type: 'text', required: true },
      { id: 'party2', label: 'Nombre de la Parte 2', type: 'text', required: true },
      { id: 'party2SSN', label: 'ID/DNI de la Parte 2', type: 'text', required: true },
      { id: 'date', label: 'Fecha Efectiva de Separación', type: 'date', required: true },
      { id: 'property', label: '¿Cómo se divide la propiedad?', type: 'textarea', required: true, placeholder: 'La Parte 1 se queda con la casa y paga a la Parte 2...' },
    ]
  },

  // --- NEGOCIOS Y CORPORATIVO ---
  {
    id: '18',
    title: 'Acuerdo de Accionistas',
    description: 'Acuerdo simple de accionistas que establece las reglas de propiedad en una empresa.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Nombre de la Empresa', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'NIF de la Empresa', type: 'text', required: true },
      { id: 'owners', label: 'Accionistas (Nombres y participaciones)', type: 'textarea', required: true, placeholder: 'Alicia - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Roles / Responsabilidades', type: 'textarea', required: true },
      { id: 'vesting', label: 'Período de Adquisición', type: 'select', required: true, options: ['Sin Adquisición', '3 años', '4 años'] },
      { id: 'hembud', label: '¿Derecho de Tanteo?', type: 'select', required: true, options: ['Sí, las acciones deben ofrecerse primero a los propietarios existentes', 'No'] },
    ]
  },
  {
    id: '8',
    title: 'Acuerdo de Confidencialidad (NDA)',
    description: 'Protege tus secretos comerciales e información sensible.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Parte Divulgadora', type: 'text', required: true },
      { id: 'party1ID', label: 'ID/NIF de la Parte Divulgadora', type: 'text', required: true },
      { id: 'party2', label: 'Parte Receptora', type: 'text', required: true },
      { id: 'party2ID', label: 'ID/NIF de la Parte Receptora', type: 'text', required: true },
      { id: 'purpose', label: 'Propósito de la Divulgación', type: 'textarea', required: true },
      { id: 'duration', label: 'Duración (años)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Cláusula Penal (Cantidad)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Contrato de Consultoría',
    description: 'Acuerdo entre un cliente y un consultor independiente.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Cliente / Empresa', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'NIF del Cliente', type: 'text', required: true },
      { id: 'consultantName', label: 'Consultor / Proveedor', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'NIF del Consultor', type: 'text', required: true },
      { id: 'assignment', label: 'Descripción del Proyecto', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Tarifa por Hora (excl. IVA)', type: 'number', required: true },
      { id: 'startDate', label: 'Fecha de Inicio', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Actas de Reunión de la Junta',
    description: 'Plantilla para reuniones de junta directiva.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Nombre de la Empresa', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'NIF de la Empresa', type: 'text', required: true },
      { id: 'meetingDate', label: 'Fecha de la Reunión', type: 'date', required: true },
      { id: 'chairperson', label: 'Nombre del Presidente', type: 'text', required: true },
      { id: 'secretary', label: 'Nombre del Secretario', type: 'text', required: true },
      { id: 'adjuster', label: 'Nombre del Revisor de Actas', type: 'text', required: true },
      { id: 'attendees', label: 'Otros Asistentes', type: 'textarea', required: true, placeholder: 'Lista de asistentes...' },
      { id: 'decisions', label: 'Decisiones Tomadas', type: 'textarea', required: true, placeholder: 'Punto 1, Punto 2...' },
    ]
  },
  {
    id: '19',
    title: 'Estatutos de la Sociedad',
    description: 'Reglamento básico para una corporación.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Nombre de la Empresa', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Número de Registro', type: 'text', required: false, placeholder: 'Si la empresa ya está establecida' },
      { id: 'seat', label: 'Oficina Registrada', type: 'text', required: true },
      { id: 'business', label: 'Propósito / Objeto de la Empresa', type: 'textarea', required: true },
      { id: 'capital', label: 'Capital Social', type: 'text', required: true, placeholder: '25.000 - 100.000' },
    ]
  },

  // --- TRABAJO Y RRHH ---
  {
    id: '2',
    title: 'Contrato de Trabajo',
    description: 'Acuerdo de empleo completo para puestos permanentes o de duración determinada.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Empleador (Empresa)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'NIF del Empleador', type: 'text', required: true },
      { id: 'employeeName', label: 'Nombre del Empleado', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID/DNI del Empleado', type: 'text', required: true },
      { id: 'position', label: 'Puesto de Trabajo', type: 'text', required: true },
      { id: 'salary', label: 'Salario Mensual', type: 'number', required: true },
      { id: 'employmentType', label: 'Tipo de Empleo', type: 'select', required: true, options: ['Permanente', 'Periodo de Prueba (6 meses)', 'Duración Determinada'] },
      { id: 'startDate', label: 'Fecha de Inicio', type: 'date', required: true },
      { id: 'vacationDays', label: 'Días de Vacaciones por año', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Certificado de Empleo',
    description: 'Certificado que confirma la duración del empleo y las responsabilidades.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Empleador', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'NIF del Empleador', type: 'text', required: true },
      { id: 'employeeName', label: 'Empleado', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID/DNI del Empleado', type: 'text', required: true },
      { id: 'periodStart', label: 'Empleado Desde', type: 'date', required: true },
      { id: 'periodEnd', label: 'Empleado Hasta', type: 'date', required: true },
      { id: 'duties', label: 'Responsabilidades Principales', type: 'textarea', required: true },
      { id: 'reason', label: 'Motivo de Baja', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Aviso de Despido',
    description: 'Aviso formal de terminación por parte del empleador.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Empleador', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'NIF del Empleador', type: 'text', required: true },
      { id: 'employee', label: 'Empleado', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID/DNI del Empleado', type: 'text', required: true },
      { id: 'reason', label: 'Motivo', type: 'select', required: true, options: ['Redundancia / Falta de trabajo', 'Motivos Personales'] },
      { id: 'lastDay', label: 'Último Día de Empleo', type: 'date', required: true },
      { id: 'contact', label: 'Persona de Contacto sobre el Aviso', type: 'text', required: true },
    ]
  },

  // --- PRIVADO Y OTROS ---
  {
    id: '4',
    title: 'Pagaré',
    description: 'Documentación para un préstamo privado entre individuos.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Nombre del Prestamista', type: 'text', required: true },
      { id: 'lenderSSN', label: 'ID/DNI del Prestamista', type: 'text', required: true },
      { id: 'borrowerName', label: 'Nombre del Prestatario', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'ID/DNI del Prestatario', type: 'text', required: true },
      { id: 'amount', label: 'Cantidad del Préstamo', type: 'number', required: true },
      { id: 'interest', label: 'Tasa de Interés (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Fecha Final de Pago', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Poder Notarial',
    description: 'Otorga a alguien el derecho de representarte en asuntos específicos.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Otorgante', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID/DNI del Otorgante', type: 'text', required: true },
      { id: 'receiverName', label: 'Apoderado / Representante', type: 'text', required: true },
      { id: 'receiverSSN', label: 'ID/DNI del Apoderado', type: 'text', required: true },
      { id: 'scope', label: 'Alcance del Poder', type: 'textarea', required: true, placeholder: 'ej. recoger paquetes, vender coche, tareas bancarias...' },
      { id: 'validUntil', label: 'Válido Hasta', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Poder Notarial Duradero',
    description: 'Decide quién se ocupará de tus asuntos si quedas incapacitado.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Otorgante', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID/DNI del Otorgante', type: 'text', required: true },
      { id: 'agent', label: 'Apoderado', type: 'text', required: true },
      { id: 'agentSSN', label: 'ID/DNI del Apoderado', type: 'text', required: true },
      { id: 'financial', label: '¿Manejar Asuntos Financieros?', type: 'select', required: true, options: ['Sí', 'No'] },
      { id: 'personal', label: '¿Manejar Asuntos Personales?', type: 'select', required: true, options: ['Sí', 'No'] },
      { id: 'conditions', label: 'Condiciones Adicionales', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Contrato de Compraventa de Vehículo',
    description: 'Acuerdo para la compra/venta de un vehículo usado entre particulares.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Nombre del Vendedor', type: 'text', required: true },
      { id: 'sellerSSN', label: 'ID/DNI del Vendedor', type: 'text', required: true },
      { id: 'buyer', label: 'Nombre del Comprador', type: 'text', required: true },
      { id: 'buyerSSN', label: 'ID/DNI del Comprador', type: 'text', required: true },
      { id: 'vehicle', label: 'Vehículo (Marca/Modelo)', type: 'text', required: true },
      { id: 'regNr', label: 'Matrícula / VIN', type: 'text', required: true },
      { id: 'price', label: 'Precio', type: 'number', required: true },
      { id: 'condition', label: 'Estado/Defectos', type: 'textarea', required: false, placeholder: 'Se vende en su estado actual. Defectos conocidos: ...' },
    ]
  }
];
