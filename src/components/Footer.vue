<template>
    <footer class="bg-teal-darken-1" >
        <v-container class="d-flex justify-space-between" style="max-width: 64rem;padding: 2rem 1rem;">
            <!-- Nosotros -->
            <div class="f-basis" id="aboutUs">
                <h5 class="font-weight-bold mb-2">¿Quienes somos?</h5>
                <!-- Descripción -->
                <p class="text-caption font-weight-regular">Somos un equipo apasionado y amantes de los libros que un día decidimos crear una tienda única en Palma de Mallorca. Compartimos amor por la lectura y creemos firmemente en el poder de los libros para enriquecer la vida de las personas y la sociedad en general. Como equipo, estamos comprometidos en crear una tienda que ofrezca una amplia variedad de títulos para todo tipo de lector, y brindar una experiencia de compra personalizada y agradable a cada cliente que entra en nuestra tienda.</p>
            </div>
            <!-- Contacto -->
            <div class="">
                <h5 class="font-weight-bold mb-2">Contáctanos</h5>
                <p class="text-caption font-weight-regular mb-2">Telefono: +34 600 600 600</p>
                <p class="text-caption font-weight-regular mb-2">Email: ficticio@gmail.com</p>
            </div>
            <!-- Localización -->
            <div class="f-basis">
                <h5 class="font-weight-bold mb-2">¿Donde estamos?</h5>
                <p class="text-caption font-weight-regular mb-2">Dirección: c/ de l'Arner, 3, 07013 Palma, Illes Balears</p>
                <!-- Google maps -->
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.6374739168136!2d2.607862015774543!3d39.59032007946967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12978d64328a11ad%3A0xf203c41015758440!2sColegio%20CIDE!5e0!3m2!1ses!2ses!4v1680978798302!5m2!1ses!2ses" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </v-container>
    </footer>
</template>

<script>
    export default {
        data:() => ({
            
        })
    }
</script>

<style>
    .f-basis {
        flex-basis: 16rem;
    }
</style>