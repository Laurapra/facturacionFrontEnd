import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  facturaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.facturaForm = this.formBuilder.group({
      id_cliente: ['', Validators.required],
      id_producto: ['', Validators.required],
      fecha_factura: ['', Validators.required],
      cantidad: ['', Validators.required],
      total_factura: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.facturaForm.valid) {
      const formData = this.facturaForm.value;
      this.http.post('http://127.0.0.1:8080/reportes/guardar-facturas/', formData)
        .subscribe(
          response => {
            console.log(response);
            notify('Factura guardada exitosamente', 'success');
            this.facturaForm.reset();
          },
          error => {
            console.error(error);
            notify('Error al guardar la factura', 'error');
          }
        );
    } else {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      this.facturaForm.markAllAsTouched();
    }
  }
}
