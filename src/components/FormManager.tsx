import { useEffect } from 'react';
import { navigate } from 'astro:transitions/client';

interface Props {
  initialResult?: any;
  initialErrors?: any;
  lang: string;
}

const FormManager = ({ initialResult, initialErrors, lang }: Props) => {
  useEffect(() => {
    // Check for successful submission and redirect
    if (initialResult?.data?.success) {
      console.log('✅ Form success detected, redirecting to thank-you page');
      navigate(`/${lang}/thank-you`);
      return;
    }

    function setupModal() {
      const openModalBtn = document.getElementById('open-modal-button');
      const closeModalBtns = document.querySelectorAll('[id^="close-modal-button"]');
      const modal = document.getElementById('contact-modal');
      const servicesContainer = document.getElementById('services-form-container');
      const selectedServicesList = document.getElementById('selected-services-list');
      const selectedServicesInput = document.getElementById('selected-services-input');

      if (!openModalBtn || !modal || !servicesContainer || !selectedServicesList || !selectedServicesInput) {
        console.error('One or more required elements for the modal were not found.');
        return;
      }

      const openModal = () => {
        const checkedCheckboxes = servicesContainer.querySelectorAll('.service-checkbox:checked');
        const serviceLabels = Array.from(checkedCheckboxes).map(checkbox => {
          return checkbox.nextElementSibling?.textContent?.trim();
        }).filter(Boolean);

        selectedServicesList.innerHTML = '';
        if (serviceLabels.length > 0) {
          serviceLabels.forEach(label => {
            const serviceEl = document.createElement('span');
            serviceEl.className = 'bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300';
            serviceEl.textContent = label;
            selectedServicesList.appendChild(serviceEl);
          });
          selectedServicesInput.value = serviceLabels.join(', ');
        } else {
          const noServiceEl = document.createElement('span');
          noServiceEl.className = 'text-slate-500 dark:text-slate-400 text-sm';
          noServiceEl.textContent = 'No services selected.';
          selectedServicesList.appendChild(noServiceEl);
          selectedServicesInput.value = 'No services selected.';
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
      };

      const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      openModalBtn.addEventListener('click', openModal);
      closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });

      // Show error messages if present
      if (initialResult?.error) {
        console.log('❌ Form error:', initialResult.error);
        // Modal is already open, just show errors
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    setupModal();

    // Listen for form submission to capture new results
    const form = document.getElementById('contact-form-main');
    if (form) {
      const handleSubmit = () => {
        console.log('📤 Form submitting...');
      };
      form.addEventListener('submit', handleSubmit);
      return () => form.removeEventListener('submit', handleSubmit);
    }
  }, [initialResult, initialErrors, lang]); // Re-run if these change

  return null;
};

export default FormManager;